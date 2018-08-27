import React from 'react';

const Projects = () => {
  return (
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
      <div>
        PROJECT OVERVIEW
      </div>
    </div>
  );
}

export default Projects;