import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'net';

export default class Stats extends Component {
  constructor(props){
    super(props);
    this.state = {repos: [], display: null, current: null, connectReset: 0, networkError: false}
    this.github = props.github;
    this.org = props.org;
  }
  componentDidMount(){
    this.timerStart(45);
    if(this.org){
      axios.get(`https://api.github.com/users/${this.github}/repos`, {headers: {Authorization: process.env.REACT_APP_GITHUB}})
      .then((repos) => {

        setTimeout(() => this.displayStats(repos.data[0].full_name), 2000);
        this.setState({
          repos: repos.data
        })
      });
    }
    if(!this.org) setTimeout(() => this.displayStats(this.github), 2000);
  }
  
  displayStats = (repo_name) => {
    this.setState({display: null, current: repo_name});
    setTimeout(() => 
    axios.get(`https://api.github.com/repos/${repo_name}`, {headers: {Authorization: process.env.REACT_APP_GITHUB}})
        .then(async (repo) => {
          console.log(repo)
          const contributors = await axios.get(`https://api.github.com/repos/${repo_name}/contributors`,{headers: {Authorization: process.env.REACT_APP_GITHUB}});
          const updatedOn = repo.data.updated_at.split('T')[0];
          const commits = await axios.get(`https://api.github.com/repos/${repo_name}/commits`, {headers: {Authorization: process.env.REACT_APP_GITHUB}});
          const branches = await axios.get(`https://api.github.com/repos/${repo_name}/branches`, {headers: {Authorization: process.env.REACT_APP_GITHUB}});
          this.setState({
            display: 
              
              <div className='stats'>
                <label>Last Update: {updatedOn}</label>
                <label>Commits: {commits.data.length}</label>
                <label>Contributers: {contributors.data.length}</label>
                <label>Branches: {branches.data.length}</label>
              </div>
          });
          
        })
      , 1500);
  }

  timerStart = (limit) => {
    setInterval(() => {
      if(this.state.connectReset >= limit) {
        this.setState({connectReset: 0, networkError: true});
        return clearInterval();
      }
      if(this.state.networkError || this.state.display) {
        this.setState({connectReset: 0});
        return clearInterval();
      }
       this.setState({connectReset: this.state.connectReset + 1});
    }, 1000)
  }


  render(){
    return (
      <div className='stats-wrapper' >
        <div className='stats-connection-status'>
        <div style={{display: 'flex',alignSelf: 'flex-start', height: '100%',padding: '0.5rem', flex: 1, }}><label style={{padding: '0.5rem', borderRadius: '1rem',border: '1px solid black', opacity:0.7, background: '#234476', color: 'white' }}>Github Client</label></div>
        <div className='stats-connection-wrapper' >
          <div className='stats-connection-icon' style={
            this.state.current
              ?
                this.state.display
                  ?
                    {backgroundColor: '#07c21d'}
                  :
                    {backgroundColor: '#e7eb30'}
              :
                this.state.networkError
                  ?
                    {backgroundColor: '#a41313'}
                  :
                    {backgroundColor: '#6689bf'}
                
          } />
          {this.state.current 
            ? 
              this.state.display 
                ? 
                  'CONNECTED' 
                : 
                  'CONNECTING' 
            : 
              this.state.networkError 
                ? 
                  'ERROR' 
                : 
                  'SEARCHING'
          }
        </div>
        </div>
        <div className='repos'> {this.state.display && (this.state.repos.length > 1 && this.org) ? this.state.repos.map((repo, i) => {
            return (
            <div key={i} style={this.state.current === repo.full_name ? {background: '#6689bf'} : {background: '#1e2939'}} onClick={() => this.displayStats(repo.full_name)} className='repo'> 
              {repo.name}
            </div>)
          }) : <div style={{color: 'black'}}>{
            this.state.current 
              ?
                this.state.display 
                  ?
                    ''
                  :
                    `Loading ${String(this.state.current.split('/')[1]).toUpperCase()}` 
              :
                this.state.networkError 
                  ?
                    `ERROR: Unable to Connect to Network`
                  :
                    `Finding repositor${this.org ? 'ies' : 'y'} from ${this.org ? 'the organization ' : ''}${this.org ? String(this.github).toUpperCase() : String(this.github.split('/')[0]).toUpperCase()}`
          }</div>} </div>
        {this.state.display}
        {!this.state.display ? <div style={{width: '100%'}}><i class="fas fa-spinner -- load"></i> </div> : null}
      </div>
    );
  }
}
