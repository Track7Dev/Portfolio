import React, { Component } from 'react';
import './App.css';
import Lottie from 'react-lottie';

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      animations:{
        headerMenu:{
          isStopped: true,
          open: false,
        }
      },      
    }
  }

  
  
  render() {
    return (

      <div className="App">
        <div className="App-Splash_Wrapper">
          <p style={{position: 'absolute', width: '80%', fontSize: 'calc(1rem + 1.5vw)', color: 'white'}}>
            "Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful, that's what matters to me."<br />
            <span style={{color: '#b2c4df'}}>-Steve Jobs</span>
          </p>
          <div className="App-Splash_Logo" ><img width="30%" alt='logo' src={'images/app/trackseven.png'}/><p>Building Tomorrow... For Today.</p></div>
          <div className="App-Splash_Left" />
          <div className="App-Splash_Right" />
        </div>
        <header className="Header">
          <img height="100%" alt='Brandon Fizer' style={{cursor:'pointer'}} src={'images/app/brandonlogo.png'} onClick={
            () => window.location.assign(window.location.origin)
          } />
          <div style={{display: 'flex', flex:1}}/>
          <div
            style={{cursor: 'pointer'}} 
            onClick={() => {
              
              this.setState({
                animations:
                  Object.assign({},{
                    headerMenu:{
                      isStopped: false,
                      open: !this.state.animations.headerMenu.open
                    }
                  })
                }); 
              
            }}>
            <Lottie options={{
              loop: false,
              autoplay: false,
              animationData: require('./animation/menu_hamburger.json'),
            }}
              height={'1.4rem'}
              width={'1.4rem'}
              isStopped={this.state.animations.isStopped}              
            />
          </div>
          
        </header>
        <div className="App-Main_View">
        <div id='menu'  className={this.state.animations.headerMenu.open ? "App-Main-Menu-Open" : "App-Main-Menu-Close"}>
            <p>HOME</p>
            <p>ABOUT ME</p>
            <p onClick={
                () =>  window.location.assign('Resume-BrandonFizer_S.pdf')
              }>RESUME</p>
            <p>CONTACT</p>
            <img src={'images/app/trackseven.png'} width="80%" style={{opacity: '0.07', marginTop: '15rem'}}/>
        </div>
        <div className="App-Main-Section">
          <header className="App-Main-Section-Header">
            <div className="App-Main-Traits_Wrapper">
              <div className="App-Main-Traits">
                <div><img width="100%" alt='trait' src={'images/Traits/trait1.png'}/></div>
                <div><img width="100%" alt='trait' src={'images/Traits/trait2.png'}/></div>
                <div><img width="100%" alt='trait' src={'images/Traits/trait3.png'}/></div>
                <div><img width="100%" alt='trait' src={'images/Traits/trait4.png'}/></div>
                <div><img width="100%" alt='trait' src={'images/Traits/trait5.png'}/></div>
               
              </div>
            </div>
          </header>
          <div className="App-Main-Projects_Wrapper">
              <header> <img alt='project' height="90rem"style={{zIndex: 1, marginBottom: '1rem'}} src={"images/app/Projects.png"} /> </header>
              <div className="App-Main-Projects">
                <div onClick={
                    () => window.location.assign('https://github.com/leveld/')
                }><img alt='leveld' width="100%" src={'images/projects/leveld.jpg'}/></div>
                <div onClick={
                    () => window.location.assign('https://github.com/Fayetteville-Tattoo-Company')
                }><img alt='FTC' width="100%" src={'images/projects/FTC.jpg'}/></div>
                <div onClick={
                    () => window.location.assign('https://github.com/gemini-hackathon/arbie')
                }><img alt='arbie' width="100%" src={'images/projects/Arbie.jpg'}/></div>
                <div onClick={
                    () => window.location.assign('https://github.com/track7dev/inkbook')
                }><img alt='inkbook' width="100%" src={'images/projects/Inkbook.jpg'}/></div>
              </div>
              <header/>
            </div>
          </div>
          <div id="about" className="App-Main-Section">
            <header className="App-Main-Section-Header">
              <div style={{width: '100%', height: '0.5rem', backgroundColor: '#3d5272'}}/>
              <div className="App-Main-Profile" >
                <img src={`images/Brandon.png`} alt="Brandon Fizer" width="90%" height="90%"/>
              </div>
              <div className="App-Main-Profile-Info">
                <div>
                  <p>
                    Example Example Example Example Example Example Example Example Example Example Example Example Example Example Example 
                    Example Example Example Example Example Example Example Example Example Example Example Example Example 
                    Example Example Example Example Example Example Example Example Example 
                    Example Example Example Example Example Example Example Example 
                    Example Example Example Example Example 
                    Example Example Example Example Example Example Example Example Example Example Example 
                    Example Example Example Example Example Example Example Example Example Example Example Example Example Example 

                    Example Example 
                    Example 
                    Example 
                  </p>
                </div>
                
              </div>
            </header>
            <div style={{width: '100%', height: '0.5rem', backgroundColor: '#3d5272'}}/>

            <div className="App-Main-Blog_Wrapper">
              <header> <img alt='Blog' height="90rem"style={{zIndex: 1, marginBottom: '1rem'}} src={"images/app/Blog.png"} /> </header>
              <div className="App-Main-Blog">

                <div>
                  <div className="App-Main-Blog_Post" onClick={
                    () => window.location.assign('https://track7dev.github.io/The-Engine/')
                  }>
                    <div style={{position: 'absolute', background: '#1e2939', width: '100%', top:0, right:0, padding: '0.4rem', borderBottomLeftRadius: 5, borderTopRightRadius:5}}>August 3, 2018</div>
                    <p>The Engine Inside the Engineer</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="App-Main-Footer"> 
            <div onClick={
              () => window.location.assign('https://github.com/TrackSevenDevelopment')
            } style={{display: 'flex', }} >©2018 Track Seven Development</div>
            <div >
              <img alt='contact' src={'images/app/github.png'} width="50rem" onClick={
                () => window.location.assign('https://github.com/track7dev')
              }/>
              <img alt='contact' src={'images/app/linkedin.png'} width="50rem"onClick={
                () => window.location.assign('https://linkedin.com/in/brandon-fizer')
              }/>
              <img alt='contact' src={'images/app/email.png'} width="50rem"onClick={
                () => {}//SHOW EMAIL
              }/>
              <img alt='contact' src={'images/app/mobile.png'} width="50rem"onClick={
                () => {}//SHOW NUNBER
              }/>
            </div>
          </div>
          </div>
          
          
        </div>

      </div>
    );
  }
}

export default App;
