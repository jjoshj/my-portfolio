
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";



import './App.css';
import { Main } from './Main';
import { Navebar } from "./Navebar";
import { Timeline } from "./Time Line/Timeline";
import { Skills } from "./Skills/Skills.js";
import { Project } from "./Skills/Project";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';

function App() {
  return (
    <div >
        
        <Router>
        <Navebar/>
        
        <Switch>
          <Route exact path="/"> <Main /><Timeline/><Skills/><Project/>< Footer/></Route>
          <Route exact path="/about"> <Timeline/></Route>
          <Route exact path="/skills"> <Skills/></Route>
          <Route exact path="/project"><Main /><Project/>< Footer/> </Route>
        </Switch>
        
        </Router>
    </div>
  );
}
function Footer(){
  return(
    <div className="footer">
      <a  href="https://github.com/jjoshj" target="_blank" rel="noreferrer"><GitHubIcon style={{width:"7vh", height:"7vh",color:"black"}}/></a>
      <a href="https://www.linkedin.com/in/jerry-josh/" target="_blank" rel="noreferrer" > <LinkedInIcon style={{width:"7vh", height:"7vh",color:"#0a66c2"}}/></a>
      <a href="mailto:jerryjosh607@gmail.com?subject=Hey!" target="_blank" rel="noreferrer"><MailIcon style={{width:"7vh", height:"7vh",color:"#be3144"}}/></a>
      <a href="https://www.instagram.com/_jerry_josh_/?r=nametag" target="_blank" rel="noreferrer"><InstagramIcon style={{width:"7vh", height:"7vh",color:"white",borderRadius:"15%",
      backgroundImage: "linear-gradient(to right top, #f3e914, #ffc203, #ff9928, #ff7144, #ff4c5c, #ff386d, #ff2080, #ff0096, #ff00a6, #fe00b7, #fa00c9, #f305dc)"}}/></a>
      
    </div>
  )
}


export default App;
