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
    console.log(process.env.NODE_ENV);
    return (

      <div className="App">
        <div className="App-Splash_Wrapper">
          <div className="App-Splash_Logo" ><img width="30%" alt='logo' src={'images/app/trackseven.png'}/><p>Building Tomorrow... For Today.</p></div>
          <div className="App-Splash_Left" />
          <div className="App-Splash_Right" />
        </div>
        <header className="Header">
          <img height="80%" alt='Brandon Fizer' style={{cursor:'pointer'}} src={'images/app/Brandonlogo.png'} onClick={
            () => window.location.open(window.location.origin)
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
            <p onClick={
                () =>  window.open(window.location.origin)
              }>HOME</p>
            <p onClick={
                () =>  window.location.replace('#about')
              }>ABOUT ME</p>
            <p onClick={
                () =>  window.open('Resume-BrandonFizer_S.pdf','_blank')
              }>RESUME</p>
            <p onClick={
              () => window.location.href = "mailto:Brandon.M.Fizer@gmail.com?subject=SE%20Inquiry&body="
              }>CONTACT</p>
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
                    () => window.open('https://github.com/leveld/','_blank')
                }><img alt='leveld' width="100%" src={'images/projects/leveld.jpg'}/></div>
                <div onClick={
                    () => window.open('https://github.com/Fayetteville-Tattoo-Company','_blank')
                }><img alt='FTC' width="100%" src={'images/projects/FTC.jpg'}/></div>
                <div onClick={
                    () => window.open('https://github.com/gemini-hackathon/arbie','_blank')
                }><img alt='arbie' width="100%" src={'images/projects/Arbie.jpg'}/></div>
                <div onClick={
                    () => window.open('https://github.com/track7dev/inkbook','_blank')
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
                    "Brandon Fizer is an inspiring Software Engineer who thrives in the process of creating High Quality work. 
                    With his ability to distinguish patterns within complex array of problems could ultimately benefit anyone's team. 
                    While working most of his life as a Professional Tattoo Artist in Fayetteville, NC, he learned the skills needed in developing
                    solid client relations & services, while also building his creative skills as a developing artist. Brandon's skillset in the 
                    technical feild spans across the entire techinal stack, Ensuring quality and efficiency throughout each technology and framework."
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
                    () => window.open('https://track7dev.github.io/The-Engine/', '_blank')
                  }>
                    <div style={{position: 'absolute', background: '#1e2939', width: '100%', top:0, right:0, padding: '0.4rem', borderTopLeftRadius: 5, borderTopRightRadius:5}}>August 3, 2018</div>
                    <p>The Engine Inside the Engineer</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="App-Main-Footer"> 
            <div onClick={
              () => window.open('https://github.com/TrackSevenDevelopment', '_blank')
            } style={{display: 'flex',cursor: 'pointer' }} >©2018 Track Seven Development</div>
            <div >
              <div style={{border: '1px solid white', cursor: 'pointer', margin: '0.5rem'}} onClick={
                () =>  window.open('Resume-BrandonFizer_S.pdf','_blank')
              }>RESUME</div>
              <img alt='contact' src={'images/app/github.png'} width="50rem" onClick={
                () => window.open('https://github.com/track7dev','_blank')
              }/>
              <img alt='contact' src={'images/app/linkedin.png'} width="50rem"onClick={
                () => window.open('https://linkedin.com/in/brandon-fizer','_blank')
              }/>
              <img alt='contact' src={'images/app/email.png'} width="50rem"onClick={
                () => window.location.href = "mailto:Brandon.M.Fizer@gmail.com?subject=SE%20Inquiry&body="
              }/>
              <img alt='contact' src={'images/app/mobile.png'} width="50rem"onClick={
                () =>  window.location.href = "tel:+19107581607"
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
