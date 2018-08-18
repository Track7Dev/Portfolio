import React from 'react';

const Header = () => {
  return (
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
  );
}

export default Header;