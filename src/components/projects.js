import React, {Component} from 'react';
import Overview from './overview';

export default class Projects extends Component {
  constructor(){
    super();
    this.state = {overview: null}
  }
  render(){
    return (
      <div className="App-Main-Projects_Wrapper">
        <header> <img alt='project' height="90rem"style={{zIndex: 1, marginBottom: '1rem'}} src={"images/app/Projects.png"} /> </header>
        <div className="App-Main-Projects">
          {/* Leveld Project */}
          <div onClick={
              () => {
                this.setState({
                  overview: <Overview main={this} links={{
                    github: 'Leveld',
                    repos: ['lan-frontend, lan-db, lan-auth, lan-utils'],
                    domain:'http://leveld.network'

                  }} 
                  org={true}
                  name='Leveld' 
                  logo='images/projects/leveld.jpg' 
                  screenshot='images/projects/leveld_product_demo.gif'
                  />
                });
              }
          }><img alt='leveld' width="100%" src={'images/projects/leveld.jpg'}/></div>

          {/* Fayetteville Tattoo Company */}
          <div onClick={
              () => {
                this.setState({
                  overview: <Overview main={this} links={{
                    github: 'Fayetteville-Tattoo-Company',
                    domain:'http://ftc.track7dev.tech'

                  }} 
                  org={true}
                  name='Fayetteville Tattoo Company' 
                  logo='images/projects/FTC.jpg' 
                  screenshot='images/projects/ftc_product_demo.gif'
                  />
                });
              }
          }><img alt='leveld' width="100%" src={'images/projects/FTC.jpg'}/></div>
          
          {/* Arbie */}
          <div onClick={
              () => {
                this.setState({
                  overview: <Overview main={this} links={{
                    github: 'gemini-hackathon',
                    domain:'http://arbie-.herokuapp.com'

                  }} 
                  org={true}
                  name='Arbie' 
                  logo='images/projects/Arbie.jpg' 
                  screenshot='images/projects/arbie_product_demo.gif'
                  />
                });
              }
          }><img alt='leveld' width="100%" src={'images/projects/Arbie.jpg'}/></div>
          
          {/* Inkbook */}
          <div onClick={
              () => {
                this.setState({
                  overview: <Overview main={this} links={{
                    github: 'track7dev/inkbook',
                    domain:''
                  }} 
                  org={false}
                  name='InkBook' 
                  logo='images/projects/inkbook.jpg' 
                  screenshot='images/projects/inkbook_product_demo.gif'
                  />
                });
              }
          }><img alt='leveld' width="100%" src={'images/projects/inkbook.jpg'}/></div>

          
        </div>
        {this.state.overview}
      </div>
    );
  } 
}
