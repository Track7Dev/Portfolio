import React, {Component} from 'react';
import axios from 'axios';

class Project extends Component {
  constructor(props){
    super(props);
    this.state = {open:null, live: null};
    this.syncFile = '/sync.jpg?t=' + Date.now();
  }
  componentWillMount(){
     switch(this.props.host){
      case 'digitalocean':
        return this.host = 'https://img.stackshare.io/service/295/DO_Logo_icon_blue.png';
      case 'heroku':
        return this.host = 'http://weibeld.net/assets/icons/heroku.png';
      default:
        return;
     } 
  }
  createImg = (name,src, width, height) => 
  <img 
    style={{margin: '0 0.5rem'}}
    alt={name} 
    src={src}
    width={'100px'} 
    height={'auto'}
  />
  render(){
    return (
      <div className='project' style={{margin: '1rem'}} onClick={
        () => {}//window.open('https://ddkgeorgia.com', '_blank')
      }>
        {
          this.props.domain ?
            <img hidden 
              src={this.props.domain + this.syncFile} 
              onError={() => this.setState({live: null})} 
              onLoad={() => this.setState({live: this.props.domain})}/>
          :
            null
        }
        
          <div style={
            {
              position: 'absolute',
              top: 0,
              left: 0,
              background: this.state.live ? 'green' : 'red',
              padding: '0.5rem',
              opacity: this.state.open ? 0 : 1,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              color: 'white',
              fontWeight: 700,
              fontSize: '0.7rem',
              zIndex: 2,
              transition: 'opacity 1s'
            }
          }>
            {this.state.live ? 'ONLINE' : 'OFFLINE'}
          </div>
          {
            this.props.award ?
              <div
                style={
                  {
                    position: 'absolute',
                    top: 0,
                    right: '2rem',
                    fontSize: '3.5em',
                    color: 'gold',
                    opacity: this.state.open ? 0 : 1,
                    transition: 'opacity 1s',
                    zIndex: 2
                  }
                }
              >
                <i className="icofont-badge"/>
              </div>
              :
              null
          }
        
          <img
            onMouseOver={(e) => {
              if(!this.props.screenshot) return; 
              e.target.src = `${this.props.screenshot}?t=${Date.now()}`;
              this.setState({open: true});
            }}
            onMouseOut={(e) => {
              this.setState({open: false});
              e.target.src = this.props.screenshot;
            }}
            style={{position: 'absolute', top: 0, opacity: this.state.open ? 1 : 0 , transition: 'opacity 1s'}}
            alt={this.props.name} width="100%" src={this.props.screenshot}
          />
          
        <img
          onMouseOver={(e) => {
            if(!this.props.screenshot) return; 

            this.setState({open: true});
          }}
          onMouseOut={(e) => {
            if(!this.props.screenshot) return; 

            this.setState({open: false});
          }}
          style={{opacity: this.state.open ? 0 : 1 , transition: 'opacity 1s'}}
          alt={this.props.name} width="100%" src={this.props.logo}/>
        
        <section>
          
          {
            this.props.name ?
              <h3 style={{margin: 0}}>{String(this.props.name).toUpperCase()}</h3>
            :
              null
          }
          {
            this.props.company || this.props.event?
              <h4 style={{margin: 0}}>{this.props.company || this.props.event}</h4>
            :
              null
          }
          {
            this.props.award ?
              <h5 style={
                {
                  margin: 0, 
                  display:'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  background: '#234476',
                  color: 'white',
                  padding: '0.5rem 0',
                  borderRadius: 5,
                  
                }
              }>
                <i 
                  style={
                    {
                      color: 'gold', 
                      fontSize: '2rem', 
                    }
                  } 
                  className='icofont-badge' 
                /> 
                  {this.props.award}
              </h5>
            :
              null
          }
          {
            this.props.info ?
              <div style={{margin: '0.5rem 0'}}>{this.props.info}</div>
            :
              null
          }
          
          {
            this.props.tech ? 
            <section 
              style={
                {
                  background: 'rgba(0,0,0,0.03)',
                  padding: '1rem',
                  margin: '1rem 0'
                }
              }>
            {
              this.props.tech.map((t) => {
                  if(t === 'react') 
                    return this.createImg(
                      t,
                      "http://www.designblognews.com/wp-content/uploads/2019/04/react-logo-vector-icon-template-clipart-free-download-15544048964ngk8-700x217.png" ,
                      
                    );
                  if(t === 'mongo') 
                    return this.createImg(
                      t,
                      "https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" ,
                      
                    );
                  if(t === 'express') 
                    return this.createImg(
                      t,
                      "https://buttercms.com/static/images/tech_banners/ExpressJS.png" ,
                      
                    );
                  if(t === 'node') 
                      return this.createImg(
                        t,
                        "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" ,
                        
                      );
                  return undefined;                
              })
            }
          </section>

            :
              null
          }
                    
          
            {
            this.props.source ?
              <div style={
                {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }
              }>
                <i style={{fontSize: '2.5rem'}} className="icofont-usb"/>  
                  <a 
                    style={
                      {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textDecorationLine: 'none',
                        color: 'blue',
                        fontWeight: 700,
                        //marginLeft: '0.5rem',
                        padding: 0,
                      }
                    } 
                    href={this.props.source.link}
                    target="_blank"
                  >
                    {this.props.source.name}
                    <span 
                      style={
                        {
                          background: this.props.source.private ? 'red' : 'green',
                          color: 'white',
                          margin: ' 0 0.5rem',
                          padding: '0.3rem',
                          fontSize: '0.7rem',
                          borderRadius: 5,
                          fontWeight: 700
                        }
                      }
                    >
                      {
                        this.props.source.private ? 
                          'PRIVATE' 
                        : 
                          'OPEN'
                      }
                      
                    </span>
                    
                  </a>
                  {
                    this.state.live ?
                      <div 
                        style={
                          {
                            display: 'flex',
                            width: 'auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0.5rem 0',
                            //fontSize: '0.7rem',
                            opacity: this.state.live ? 1 : 0
                          }
                        }
                      >
                        <span 
                          style={
                            {
                              background: '#154a9c',
                              padding: '0.5rem 1rem',
                              color: 'white',
                          //margin: ' 0 0.5rem',
                          padding: '0.3rem',
                          fontSize: '0.7rem',
                          borderRadius: 5,
                          fontWeight: 700
                            }
                          }>
                        
                        
                          <a 
                            style={
                              {
                                textDecoration: 'none',
                                color: 'white',
                                padding: 0,
                              }
                            }
                            href={String(this.state.live) || ''} target={'_blank'}>
                            VIEW APP
                          </a>
                          
                        </span>
                      </div>
                    :
                      null
                  }
              </div>
            :
              null
          }
          
          {
            this.props.host && this.state.live ?  
              <div
                style={
                  {
                    position: 'absolute',
                    top: '2.2rem',
                    left: '1.2rem',
                    width: '2.5rem',
                    height: '2.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'white',
                    borderRadius: '100%',
                    opacity: this.state.open ? 0 : 1,
                    transition: 'opacity 1s'
                  }
                }
              >
                <img alt='host' width='80%' src={this.host} />
              </div>                
            :
              null
          }
        </section>
      </div>
    );
  }
}

export default class Projects extends Component {
  constructor(){
    super();
    this.state = {overview: null}
  }
  render(){
    return (
      <div id='projects' className="App-Main-Projects_Wrapper">
        <header> <img alt='project' height="80rem"style={{zIndex: 1}} src={"images/app/Projects.png"} /> </header>
        <div className="App-Main-Projects">
          <div className='gap-cut-top'/>
          {/* DDK Georgia Project */}
          <Project 
            company="Dark Dynasty K9's Georgia"
            name="DDK GA"
            domain={'https://ddkgeorgia.com'}
            host='digitalocean'
            logo='images/projects/ddk.png'
            info="Showcase application designed to manage and display the dogs available for the Georgia Branch of Dark Dynasty K9's"
            source={
              {
                link: 'https://bitbucket.org/account/user/t7dev/projects/DG',
                name: 'Bitbucket',
                private: true
              }
            }
            tech={['mongo', 'express','react', 'node']}
          />
          <Project 
            event="LambdaSchool 24hr Hackathon"
            name="Arbie"
            award="Most Likely To Become A Startup"
            domain={'https://arbie.track7dev.tech'}
            screenshot='images/projects/arbie_product_demo.gif'
            logo='images/projects/arbie.png'
            info="Application designed to find the Arbitrage of cryptocurrency
            from multiple exchanges to calculate the profit to be made
            if the client was to buy & sell at that given time"
            
            source={
              {
                link: 'https://github.com/Gemini-Hackathon/arbie',
                name: 'Github',
              }
            }
            tech={['mongo', 'express','react', 'node']}
            host='digitalocen'
          />
          
          <div className='gap-cut-bottom' />
        </div>
        {/* {this.state.overview} */}
      </div>
    );
  } 
}
