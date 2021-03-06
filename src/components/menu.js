import React from 'react';

const Menu = (props) => {
  const close = () => {
    props.main.setState(
      {
        animations: Object.assign(
          {...props.main.state.animations}, 
          {
            headerMenu: Object.assign(
              {...props.main.state.animations.headerMenu},
              {open: false})
          }
        )
      }
    )
  }
  return (
    <div id='menu'  className={props.main.state.animations.headerMenu.open ? "App-Main-Menu-Open" : "App-Main-Menu-Close"}>
      <p onClick={
          () =>  close(window.location.replace('#about'))
        }>ABOUT ME</p>
      <p onClick={
          () =>  close(window.location.replace('#projects'))
          
        }>PROJECTS</p>
      <p onClick={
          () =>  close(window.location.replace('#blog'))
          
        }>BLOG</p>
      
      <p onClick={
          () =>  close(window.open(`BrandonFizer-Resume2019.pdf?t=${Date.now()}`,'_blank'))
        }>RESUME</p>
      <p onClick={
        () => close(window.location.href = "mailto:Brandon.M.Fizer@gmail.com?subject=SE%20Inquiry&body=")
        }>CONTACT</p>
    </div>
  );
}

export default Menu;