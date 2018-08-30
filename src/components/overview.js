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
        this.setState({bio: project.data.bio || project.data.description});
      });
    }
  }

  close = () => this.main.setState({overview: null});
  render(){
    return (
      <div className='App-Main-Projects-Overview'>
        <div className='main-wrapper'>
        <header>
          <div className='logo'>
            {this.logo ? <img alt='logo'  src={this.logo}/> : null}
          </div>
          <div style={{flex: 1, fontSize: 'calc(1rem + 1.5vw)', padding: '0 1rem', fontFamily: "'Playfair Display', serif"}}>
            {String(this.name).split('').slice(0, 30).join('')}
          </div>
          {/* ERROR: fixing with redux */}
          <div onClick={() => this.close()}> 
          <i className="far fa-times-circle -- blend"/>
          </div>
        </header>

        <div className='wrapper'>
          <div className='display'>
            <div className='screenshot'><img alt='screenshot' width='100%'src={this.screenshot} /></div>
            <div className='bio'>
              {this.state.bio ? this.state.bio : 'No Description Available'}
            </div>
            <Stats main={this} github={this.links.github} org={this.org}/>
            <div className='data' >
              <div className='links' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              
                {/* <img className='tab' src={'images/app/links_side_tab.jpg'}/> */}
                <div 
                  onMouseOver={
                    (e) => document.getElementById('source').style.opacity = 1 
                  }
                  onMouseOut={
                    () => document.getElementById('source').style.opacity = 0
                  }
                  style={{
                    position: 'relative', 
                    margin: '0.5rem', 
                    overflow: 'hidden'
                  }}>

                  <div id='source' className='Overview-link-title' >SOURCE</div>
                  <img alt='github' className='Overview-link-img' src={'images/app/github.png'} onClick={
                    () => window.open(`https://github.com/${this.links.github}`,'_blank')
                  }/>
                </div>
                
                
                {this.links.domain && 
                  <div 
                  onMouseOver={
                    () => document.getElementById('app').style.opacity = 1 
                  }
                  onMouseOut={
                    () => document.getElementById('app').style.opacity = 0
                  }
                  style={{
                    position: 'relative', 
                    margin: '0.5rem', 
                    overflow: 'hidden'
                  }}>
                    <div id='app' className='Overview-link-title'>APP</div>
                    <img alt='app' className='Overview-link-img' src={this.logo} onClick={
                      () => window.open(this.links.domain,'_blank')
                    }/>
                  </div>
                }
                

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