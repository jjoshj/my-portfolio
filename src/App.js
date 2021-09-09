
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

function App() {
  return (
    <div >
        
        <Router>
        <Navebar/>
        
        <Switch>
          <Route exact path="/"> <Main /><Timeline/><Skills/><Para/><Project/>< Footer/></Route>
          <Route exact path="/para1"> <Timeline/></Route>
          <Route exact path="/para2"> <Skills/></Route>
         
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
     
      
    </div>
  )
}

function Para(){
  return(
    <p>1. You are the life in my days that makes them lively, the one that does everything to bring out the sweet part of me. I don’t care to know how you do this, but I’m perfectly fine with what you’re doing to me. Being with you, holding you in my arms, looking into your eyes, my world comes alive. You have taken charge of my life and I definitely do love it that way. You are the only woman that my heart beats for and that’s how it will be forever. You’re my heaven, my paradise, my sweetheart and my soul companion. I love that I met you and I love you. My heart is yours forever baby, you are the only one I love and will always love.

    2. Every time I look up, it feels like I am seeing you. Everything around me makes me feel you’re here even on the days that you’re not there. You are my world that my reflection falls on at all times. You’re not just special baby, you’re unique in every possible way. Loving you is everything to me, I’m sure you already know, I carry you in my heart and to everywhere so that I don’t feel lonely when you’re not there. I love your smiles and your laughter. You’re the only thing that is irreplaceable in my life and I don’t even want to bear the thought of losing you. With each day, you prove to me that you’re amazing and I can’t ever get enough of you.
    
    3. If you ask me a million times how much I love you, my answer will remain the same; that I love you too much in million ways. Your love in my heart is fresh and preserved each day for the next day to come. Since I met you, I’ve had no regrets and I’m positive there won’t be one, ever. With you in my life, my days are much better. To the woman of my dreams, the one that calms my spirit always, the only woman that holds my heart locked, I love you too much babe. I don’t care what anyone says or whatever happens, you will always be my one and only woman.
    
    4. You know the sweet thing about our love, it’s that even when you’re not here, I’ll always love you more. You have made life and love so beautiful and easy that now, I’m sure I’ve got the strength to take on anything head-on. Your face when you smile, your eyes when you’re happy, the way you say my name, the way you carry yourself with much confidence, the aura you exude, all of these have meshed into my subconscious that when you’re not here but I’m talking to you, I can imagine what your body movements are. Love me, baby, like I love you and more. You are the one that brought the butterflies to my tummy, the only one that makes my heart race wildly. In all babe, you’re my life biggest motivation. The only true love that was made but the heaven just for me.
    
    5. Do you know how you always tell me that I look cute when I smile? Well, that’s how I look right now, because, I’m smiling so hard. That’s what you do to me, baby when I think of you and of course, I do that every moment. Thanks for making my love fantasy a reality, with you everything is just so perfect, even when we argue. I don’t mince words when I tell you I can’t wait to walk the journey of life with you. I want to be the one you always hold onto when things don’t go as planned. The one you sleep with every night and wake up to every morning. You already know I’ll do anything for you even till infinity.
    
    6. Every good thing in life for me is wrapped all up in one person and that’s you. I love that I can always reach out to you in my heart and find you there, with me all the way. I gave you my heart already and I’ll be loving you for as long as I breathe. You came into my life and now, I can’t ever let you go, not anymore. My love is not blind, it seems even more than my eyes can know. With my heart, I’ll love and hold you for as long as you want me and I’m sure that’s going to be forever. You are my deepest dream come true, the only thing that makes sense in my life. I am happily and fearlessly in love with you now and always babe.
    
    7. Since you came into my life, so many things have changed but most importantly, I smile happily more. The feeling I get from loving you and knowing you’re mine is not something I could accurately describe with words. My heart reaches out to yours all the time, you’re the reason that my mind races and I love it. I will do anything I can to make you know that without you, I am nothing, I can’t exist. I need you, I want you, with every fibre in me. Most people wish they could turn the clocks back and go back in time, I don’t dare imagine that because my past without you was a broken life. I will look forward to having you and holding you tomorrow and forever.
    
    8. You happened to me and now my life is a bundle of pleasant surprises and amazing opportunities. I know you’re not perfect and I’m not too, that’s why our imperfections came together to be real love. The most important part of my life is you. I had no regrets giving my heart to you because if you’ve done a better job at keeping it better than I could have done myself. You’re the right one for me today and forever. The only one that my heart will love endlessly. You don’t have to wonder why I am so in love with you this way, I can’t hold back any part of me for you either. In this life, it is you or no one else. My world is perfect and peaceful because that’s what you do to me. The day you came into my life is the best for me and I’ll love to leave it that way.
    
    9. One thing I’ll never quite figure out is how you make me fall completely for you to the extent that I’m enjoying it so much. With you, the weather, the mood, the atmosphere, life, work and even stress is enjoyable. You came into my life and made it stand out and now, I feel like the most special person in the world. That’s what your love does to me. You’re not just a woman to me, you’re my woman, the universe that I live in. The one whose thoughts alone makes me smile and gives me the strength to face whatever the day has in store for me. You are my own wonder woman with incredible superpowers that lights my heart up. I see you’re determined to have my heart, well, it’s yours already, with no restrictions at all. I love you so much, babe.
    
    10. To the world you’re just you, but to me, you’re more than just a girl, you’re the only reason my heart is happy and free, the only one that has my heart held bound, the one that captivates me completely. It’s not an understatement that you’re my angel, you are the only one that makes life and love meaningful to me. With you in my life, I’ve got no boundaries, no inhibitions whatsoever. You’re my peace of mind, the best part of my days and the sweetest thoughts of my night. I can’t get tired of telling you I love you because that’s what I live my life for. I love you from the crown of your head to the sole of your feet.
    
    Romantic Long Paragraphs for Her – Wife
    
    You’ve finally put a ring on the finger of that woman you love and want to spend the rest of your life with, but then, it’s not the time to relax in confessing your love for her. Reassure her every day of what she means to you, to your home.
    
    Make your wife happy by sending her any of these romantic long paragraphs here.
    
    11. In you, I found love, a friend, a companion, a mother, a role model, a perfect human, in short, you’re my total package. I’m glad you’re not just in my life but that you’re my better half. You complete me in all ways. I have so many things today to you but the most important is that I’m going to live my life proving to you with each day that you’re my one true love. Always and forever, we’ll be together with nothing to come between us. I love you, my woman, always.
    
    12. The real satisfaction that I get in my life is the knowledge that now, always and forever we’ll be together. You are the spark of love that fills up my heart and makes everything brand new. Thank God I found you, you’re not just my wife, but my most real partner and life companion. Your strength is endless, your beautiful s</p>
  );
}
export default App;
