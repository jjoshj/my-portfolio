import "../Time Line/timeline.css";



export function Timeline(){
    return (
        <div className="Timeline">
          <h1>About Josh</h1>
          <p>I'm a full stack developer from Chennai living in Pondicherry, TamilNadu. 
            I'm always looking for an opportunity to code and learn new things.
            I study everyday to learn something new with programming. 
            I like to code everything I imagine and I think it can make a social impact sometimes.</p>
            <p>Name         : Jerry Josh J</p>
            <p>Date of Birth:18.10.1998</p>
           
          <section id="career">
            <div class="section_title">
              <h3>Time Line</h3>
              <p class="section_subtitle">About my educ</p>
            </div>
            <div class="career_group">
              <div class="careeritem">
                <span class="careerdate">2014</span>
    
                <div class="career_timeline"></div>
                <div class="career_text">
                  <h2>
                    Krishnasamy Memorial Matriculation Higher Secondary School,
                    Cuddalore
                  </h2>
                  <p>
                    Zurzeit absolviere ich die 4-jährige Berufslehre zum Interactive
                    Media Designer. Dabei arbeite ich neben der Schule drei Tage pro
                    Woche im Lehrbetrieb XY.
                  </p>
                </div>
              </div>
              <div class="careeritem">
                <span class="careerdate">2016</span>
                <div class="career_timeline"></div>
                <div class="career_text">
                  <h2>
                    Krishnasamy Memorial Matriculation Higher Secondary School,
                    Cuddalore
                  </h2>
                  <p>
                    Um mich best möglich auf die IMD Ausbildung vorzubereiten, habe
                    ich während drei Monaten den gestalterischen Vorkurs an der
                    SFGBB in Bern besucht.
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
                    Meine gesamte obligatorische Schulzeit habe ich in Bern
                    absolviert und mit sehr guten Noten abgeschlossen.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      );
}