import React from 'react';
const Footer = () => {
  return (
    <div className="App-Main-Footer"> 
      <div onClick={
        () => window.open('https://github.com/TrackSevenDevelopment', '_blank')
      } style={{display: 'flex',cursor: 'pointer' }} >
        ©2018 Track Seven Development
      </div>
      <div >
        <div className="Resume" style={{border: '1px solid white', cursor: 'pointer', margin: '0.5rem'}} onClick={
          () =>  window.open('BrandonFizer-Resume2019.pdf','_blank')
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
        <img alt='contact' src={'images/app/mobile.pn'} width="50rem"onClick={
          () =>  window.location.href = "tel:+19108139351"
        }/>
      </div>
    </div>
  );
}

export default Footer;