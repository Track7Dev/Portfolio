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
          open: false
        }
      }
    }
  }
  
  render() {
    return (

      <div className="App">
        <div className="App-Splash_Wrapper">
          <div className="App-Splash_Logo" >SPLASH LOGO</div>
          <div className="App-Splash_Left" />
          <div className="App-Splash_Right" />
        </div>
        <header className="Header">
          <h3>Brandon Fizer</h3>
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
        <div id='menu' className={this.state.animations.headerMenu.open ? "App-Main-Menu-Open" : "App-Main-Menu-Close"}></div>
        <div className="App-Main-Section">
          <header className="App-Main-Section-Header">
            <div className="App-Main-Traits_Wrapper">
              <div className="App-Main-Traits">
                <div style={{height: 200, width: 200, border: '1px solid black', backgroundColor: 'grey'}}/>
                <div style={{height: 200, width: 200, border: '1px solid black', backgroundColor: 'grey'}}/>
                <div style={{height: 200, width: 200, border: '1px solid black', backgroundColor: 'grey'}}/>
                <div style={{height: 200, width: 200, border: '1px solid black', backgroundColor: 'grey'}}/>
                <div style={{height: 200, width: 200, border: '1px solid black', backgroundColor: 'grey'}}/>
                <div style={{height: 200, width: 200, border: '1px solid black', backgroundColor: 'grey'}}/>
              </div>
            </div>
          </header>
          <div className="App-Main-Projects_Wrapper">
              <header> Projects </header>
              <div className="App-Main-Projects">
              <div style={{height: 300, width: 300, border: '1px solid black', backgroundColor: 'orange'}}/>
              <div style={{height: 300, width: 300, border: '1px solid black', backgroundColor: 'orange'}}/>
              <div style={{height: 300, width: 300, border: '1px solid black', backgroundColor: 'orange'}}/>
              <div style={{height: 300, width: 300, border: '1px solid black', backgroundColor: 'orange'}}/>
              </div>
            </div>
          </div>
          <div id="about" className="App-Main-Section">
            <header className="App-Main-Section-Header">
              <div className="App-Main-Profile" >
                <img src={`images/brandon.png`} alt="Brandon Fizer" width="90%" height="90%"/>
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
            <div className="App-Main-Blog_Wrapper">
              <header> Blog </header>
              <div className="App-Main-Blog">
                <div style={{height: 300, width: 300, border: '1px solid black', backgroundColor: 'orange'}}/>
                <div style={{height: 300, width: 300, border: '1px solid black', backgroundColor: 'orange'}}/>
                <div style={{height: 300, width: 300, border: '1px solid black', backgroundColor: 'orange'}}/>
                <div style={{height: 300, width: 300, border: '1px solid black', backgroundColor: 'orange'}}/>
              </div>
            </div>
            <div style={{display: 'flex', padding: '1rem 0', width: '100%', justifyContent: 'center', alignItems: 'center'}}> FOOTER </div>
          
          </div>
          
        </div>

      </div>
    );
  }
}

export default App;
