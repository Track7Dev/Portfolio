import React, {Component} from 'react';
import axios from 'axios';

export default class Stats extends Component {
  constructor(props){
    super(props);
    this.state = {repos: null, display: null, current: null}
    this.github = props.github;
    this.org = props.org;
  }
  componentDidMount(){
    console.log(this.state.current);
    if(this.org){
      axios.get(`https://api.github.com/users/${this.github}/repos`, {headers: {Authorization: process.env.REACT_APP_GITHUB}})
      .then((repos) => {

        setTimeout(() => this.displayStats(repos.data[0].full_name), 2000);
        this.setState({
          repos: repos.data
        })
      });
    }
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

  render(){
    return (
      <div className='stats-wrapper' >
        <div className='repos'> {this.state.display ? this.state.repos.map((repo, i) => {
            return (
            <div key={i} style={this.state.current === repo.full_name ? {background: '#6689bf'} : {background: '#1e2939'}} onClick={() => this.displayStats(repo.full_name)} className='repo'> 
              {repo.name}
            </div>)
          }) : <div style={{color: 'black'}}>{
            this.state.current 
              ?
                `Loading ${this.state.current.split('/')[1]}` 
              :
                `Finding repositories from ${this.org ? 'the organization ' : null}${this.github}`
          }</div>} </div>
        {this.state.display}
        {!this.state.display ? <div style={{width: '100%'}}><i class="fas fa-spinner -- load"></i> </div> : null}
      </div>
    );
  }
}
