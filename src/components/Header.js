import React from 'react';
import Lottie from 'react-lottie';


const Header = (props) => {
  return (
    <header className="Header">
      <img height="80%" alt='Brandon Fizer' style={{cursor:'pointer'}} src={'images/app/Brandonlogo.png'} onClick={
        () => window.location.open(window.location.origin)
      } />
      <div style={{display: 'flex', flex:1}}/>
      <div
        style={{cursor: 'pointer'}} 
        onClick={() => {
          
          props.main.setState({
            animations:
              Object.assign({},{
                headerMenu:{
                  isStopped: false,
                  open: !props.main.state.animations.headerMenu.open
                }
              })
            }); 
          
        }}>
        <i class="fas fa-bars"/>
      </div>
      
    </header>
  );
}

export default Header;
