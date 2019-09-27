import React, { Component } from 'react';
import './App.css';
import {
  Projects,
  Traits,
  Footer,
  Splash,
  Header,
  Menu
} from './components';

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
  closeMenu = () => {
    this.setState({
      animations: 
        Object.assign({},{
                headerMenu:{
                  isStopped: false,
                  open: false
                }
              })
            });
  }
  
  render() {
    return (

      <div className="App">
        <Splash />
        <Header main={this} />
        <div  className="App-Main_View">
        <Menu main={this}/>
        <div id="about" className="App-Main-Section">
        <header  style={{paddingTop: '3rem'}} className="App-Main-Section-Header">


              <div  className="App-Main-Profile" >
                <img src={`images/Brandon.png`} alt="Brandon Fizer" width="90%" height="90%"/>
              </div>
              <div className="App-Main-Profile-Info">
                <div>
                  <p>
                    "Brandon Fizer is a Professional Tattoo Artist turned Software Engineer who thrives in the process of creating High Quality work.
                    With his ability to distinguish patterns within complex array of problems, he could ultimately benefit anyone's team.
                    <br/> 
                    <br/> 
                    While working most of his life as a Tattoo Artist in Fayetteville, NC, he learned the skills needed in developing
                    solid client relations & services, while also building his creative skills as a developing artist. Brandon's skill-set in the 
                    technical field spans across the entire tech stack, ensuring quality and efficiency throughout each technology and framework"
                  </p>
                </div>
                
              </div>
              <div style={{background: 'black', width: '100%', height: '1rem'}}/>
            </header>
          <header className="App-Main-Section-Header">
            <Traits />
            <div className="gap-cut-bottom" />

          </header>
          <Projects />
        </div>
          <div className="App-Main-Section">
            
            {/* <div style={{width: '100%', height: '0.5rem', backgroundColor: '#3d5272'}}/> */}

            <div id="blog" className="App-Main-Blog_Wrapper">
              <header> <img alt='Blog' height="90rem"style={{zIndex: 1}} src={"images/app/Blog.png"} /> </header>
              <div className="App-Main-Blog">
              <div className="gap-cut-top"/>              

                <div>
                  <div className="App-Main-Blog_Post" onClick={
                    () => window.open('https://track7dev.github.io/The-Engine/', '_blank')
                  }>
                    <div style={{position: 'absolute', background: '#1e2939', width: '100%', top:0, right:0, padding: '0.4rem', borderTopLeftRadius: 5, borderTopRightRadius:5}}>August 3, 2018</div>
                    <h3>The Engine Inside the Engineer</h3>
                  </div>
                </div>
              <div className="gap-cut-bottom" />                
              </div>
            </div>
            <Footer />
          </div>
          
          
        </div>

      </div>
    );
  }
}

export default App;
