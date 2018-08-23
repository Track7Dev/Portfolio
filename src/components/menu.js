import React from 'react';

const Menu = (props) => {
  return (
    <div id='menu'  className={props.main.state.animations.headerMenu.open ? "App-Main-Menu-Open" : "App-Main-Menu-Close"}>
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
  );
}

export default Menu;