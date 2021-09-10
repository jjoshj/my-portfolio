import "../Time Line/timeline.css";
import Button from '@material-ui/core/Button';


export function Timeline(){
    return (
        <div className="Timeline">
          <h1>About Jerry</h1>
          <p><b>Name</b>         : Jerry Josh J</p>
            <p><b>Date of Birth</b>:18.10.1998</p>
          <p>I'm a full stack developer from Chennai living in Cuddalore, TamilNadu. 
            I'm always looking for an opportunity to code and learn new things.
            I study everyday to learn something new with programming. 
            I like to code everything I imagine and I think it can make a social impact sometimes.</p>
            <p>I was born and brought up in Cuddalore. 
              I completed my schooling at Krishnasamy Memorial Matriculation Higher Secondary School, Cuddalore.
               Then I went to Chennai for my higher studies. 
               There I joined Loyola college for my bachelor's degree in mathematics. 
               Then I rejoined Loyola college for my master's degree in Mathematics.
                I completed my M.sc in the month of July this year.
               Then I joined Guvi to became a  javascript full stack developer.
               I love playing football and have represented my hostel team in many competitions. 
               My strengths are being hard-working, easily adaptable to any kind of environment, and team worker.
My short-term goal is to get a job in a reputed company.</p>
           
           
          <section id="career">
            <div class="section_title">
              <h3>Time Line</h3>
              <p class="section_subtitle">About my educ</p>
            </div>
            <div class="career_group">
              <div class="careeritem">
                <span class="careerdate">2014
                </span>
    
                <div class="career_timeline"></div>
                <div class="career_text">
                  <h4>
                    Krishnasamy Memorial Matriculation Higher Secondary School,
                    Cuddalore
                  </h4>
                  <p>
                  Class 10th is my best class although it was board but
                   we created lots of memories in our school and 
                   Every moment spent in class 10th is Unforgettable.
                   Finely I scored well and got 100% in Science.
                  </p>
                </div>
              </div>
              <div class="careeritem">
                <span class="careerdate">2016</span>
                <div class="career_timeline"></div>
                <div class="career_text">
                  <h4>
                    Krishnasamy Memorial Matriculation Higher Secondary School,
                    Cuddalore
                  </h4>
                  <p>
                    Class 12th.This class may be the best class of every one's life...
                    Till this class you never understand the importance of your school and teacher 
                    but once this class gets over you miss your school and teachers a lot and specially your friends.. 
                    
                  </p>
                </div>
              </div>
              <div class="careeritem">
                <span class="careerdate">
                  2016 - 2019
                  <div>
                    <img
                      class="timelineImage"
                      src="https://upload.wikimedia.org/wikipedia/en/1/13/Loyola_College_Chennai_-_Coat_of_arms.png"
                      alt="logo"
                    />
                  </div>
                </span>
                <div class="career_timeline"></div>
                <div class="career_text">
                  <h2>Loyola College, Chennai</h2>
                  <p>
                    Meine gesamte obligatorische Schulzeit habe ich in Bern
                    absolviert und mit sehr guten Noten abgeschlossen.
                  </p>
                </div>
              </div>
              <div class="careeritem">
                <span class="careerdate">
                  2019 - 2021
                  <div>
                    <img
                      class="timelineImage"
                      src="https://upload.wikimedia.org/wikipedia/en/1/13/Loyola_College_Chennai_-_Coat_of_arms.png"
                      alt="logo"
                    />
                  </div>
                </span>
                <div class="career_timeline"></div>
                <div class="career_text">
                  <h2>Loyola College, Chennai</h2>
                  <p>
                    Um mich best möglich auf die IMD Ausbildung vorzubereiten, habe
                    ich während drei Monaten den gestalterischen Vorkurs an der
                    SFGBB in Bern besucht.
                  </p>
                </div>
              </div>
              <div class="careeritem">
                <span class="careerdate">
                  June 2021
                  <div>
                    <img
                      class="timelineImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKZodQUvuwJ1NF9U-12TFoXVA-reVNRDzug&usqp=CAU"
                      alt="logo"
                    />
                  </div>
                </span>
                <div class="career_timeline"></div>
                <div class="career_text">
                  <h2>Full Stack Developer Bootcamp</h2>
                  <p>
                  I hear and I forget.
                   I see and I remember.
                   I do and I understand.
                  </p>
                </div>
              </div>
              
              <Button  
     href="https://drive.google.com/file/d/1AKNqKHAwAZsyKmd7y7ySYg_FoNBkSQol/view?usp=sharing" target="_blank" rel="noreferrer"
     style={{border:"3px solid #be3144"}} variant="contained">Resume</Button>
            </div>
            
          </section>
         
          <h2>Start editing to see some magic happen!</h2>
        </div>
      );
}