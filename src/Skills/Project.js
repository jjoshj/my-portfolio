import React from 'react';
import "./skills.css";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';


export  function Project() {
 

  return (
    < div style={{textAlign:"center"}}>
       <hr style={{width:"95%",border:"3px solid #be3144",backgroundColor:"#ffe473"}}/>
     <h1> Project</h1>
    
    <div  className="project" >
     
    <Card  style={{width:'18rem',height:"30rem",textAlign:"center"}} >
     <img src="img/Capture.PNG" 
     alt="project"
     style={{width:'100%',height:"15rem"}}/>
     <p><b>About:</b>This a demo of bookmy show app</p>
     <div><b>Techniques Used:</b><p>React JS, Material UI, Mock Api</p></div>
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
     <p><b>About:</b>Just disply datas and responsive </p>
     <div><b>Techniques Used:</b><p>HTML, CSS, Java Script</p></div>
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
     <p><b>About:</b>A dictionary app</p>
     <div><b>Techniques Used:</b><p>HTML, CSS, Java Script</p></div>
     <Button
     href="https://github.com/jjoshj/Dictionary" target="_blank" rel="noreferrer"
     variant="contained" ><GitHubIcon/>Git Hub</Button>
     <Button style={{marginLeft:"4rem"}}
    href="https://dictionary-josh.netlify.app/" target="_blank" rel="noreferrer"
     variant="contained"  ><WebIcon/>site</Button>
    </Card>
    
          
    </div></div>
  );
}
