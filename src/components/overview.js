import React, {Component} from 'react';
import Stats from './stats';
import axios from 'axios';



export default class Overview extends Component {
  constructor(props){
    super(props);
    this.state = {bio: props.bio, team: null}
    this.logo = props.logo;
    this.name = props.name;
    this.main = props.main;
    this.links = props.links;
    this.org = props.org;
    this.bio = props.bio;
    this.screenshot = props.screenshot;
  }
  componentWillMount(){
    if(!this.state.bio){
      const link = this.org ? 'users' : 'repos';
      axios.get(`https://api.github.com/${link}/${this.links.github}`, {headers:{Authorization: process.env.REACT_APP_GITHUB}})
      .then((project) => {
        console.log(project.data);
        this.setState({bio: project.data.bio || project.data.description});
      });
    }
  }
  render(){
    return (
      <div className='App-Main-Projects-Overview'>
        <div className='main-wrapper'>
        <header>
          <div className='logo'>
            {this.logo ? <img  src={this.logo}/> : null}
          </div>
          <div style={{flex: 1}}>
            {this.name}
          </div>
          <div onClick={() => this.main.setState({overview: null})}>
          <i className="far fa-times-circle -- blend"/>
          </div>
        </header>

        <div className='wrapper'>
          <div className='display'>
            <div className='screenshot'><img width='100%'src={this.screenshot} /></div>
            <div className='bio'>
              {this.state.bio ? this.state.bio : 'No Description Available'}
            </div>
            <Stats main={this} github={this.links.github} org={this.org}/>
            <div className='data' >
              <div className='links' style={{display: 'flex'}}>
              
                <img className='tab' src={'images/app/links_side_tab.jpg'}/>
                <img className='img' src={'images/app/github.png'} onClick={
                  () => window.open(`https://github.com/${this.links.github}`,'_blank')
                }/>
                {this.links.domain && <img className='img' src={this.logo} onClick={
                  () => window.open(this.links.domain,'_blank')
                }/>}
              </div>
              {/* <div className='owner'>
                <img className='tab' src={'images/app/owner_side_tab.jpg'}/>
                
              </div> */}
              {/* <div className='team'>
                <img className='tab' src={'images/app/team_side_tab.jpg'}/>
                
              </div> */}
            </div>
            
          </div>
        </div>
        </div>
      </div>
    );
  }
}