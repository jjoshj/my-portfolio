import React from 'react';
import "./skills.css";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

export  function Project() {
 

  return (
    <>
     <h1 style={{textAlign:"center"}}> Project</h1>
    <div className="project" >
     
    <Card  style={{width:'18rem',height:"30rem"}} >
     <img src="img/Capture.PNG" 
     alt="project"
     style={{width:'100%',height:"15rem"}}/>
     <p>hai</p>
     <Button 
      href="https://github.com/jjoshj/bookshow" target="_blank" rel="noreferrer"
     variant="contained" ><GitHubIcon/>Git Hub</Button>
     <Button style={{marginLeft:"4rem"}}
     href="https://pensive-mahavira-6597e0.netlify.app/" target="_blank" rel="noreferrer"
     variant="contained"  ><WebIcon/>site</Button>
    </Card>
    <Card  style={{width:'18rem',height:"30rem"}} >
     <img src="img/Sunnyside.PNG"
     alt="project"
     style={{width:'100%',height:"15rem"}}/>
     <p>hai</p>
     <Button
     href="https://github.com/jjoshj/sunnyside" target="_blank" rel="noreferrer"
     variant="contained" ><GitHubIcon/>Git Hub</Button>
     <Button style={{marginLeft:"4rem"}}
     href="https://sunnyside-josh.netlify.app/" target="_blank" rel="noreferrer"
     variant="contained"  ><WebIcon/>site</Button>
    </Card>
    <Card  style={{width:'18rem',height:"30rem"}} >
     <img src="img/Dictionary.PNG"
     alt="project"
     style={{width:'100%',height:"15rem"}}/>
     <p>hai</p>
     <Button
     href="https://github.com/jjoshj/Dictionary" target="_blank" rel="noreferrer"
     variant="contained" ><GitHubIcon/>Git Hub</Button>
     <Button style={{marginLeft:"4rem"}}
    href="https://dictionary-josh.netlify.app/" target="_blank" rel="noreferrer"
     variant="contained"  ><WebIcon/>site</Button>
    </Card>
    </div></>
  );
}
