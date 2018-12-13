import React from 'react';

const Menu = (props) => {
const main = props.main;
  return (
    <div id='menu'  className={props.main.state.animations.headerMenu.open ? "App-Main-Menu-Open" : "App-Main-Menu-Close"}>
      <p onClick={
          () =>  {main.closeMenu(); window.open(window.location.origin);}
        }>HOME</p>
      <p onClick={
          () =>  {main.closeMenu(); window.location.replace('#about');}
        }>ABOUT ME</p>
      <p onClick={
          () =>  {main.closeMenu(); window.open('Resume-BrandonFizer-SE.pdf','_blank');}
        }>RESUME</p>
      <p onClick={
        () => {main.closeMenu(); window.location.href = "mailto:Brandon.M.Fizer@gmail.com?subject=SE%20Inquiry&body=";}
        }>CONTACT</p>
    </div>
  );
}

export default Menu;