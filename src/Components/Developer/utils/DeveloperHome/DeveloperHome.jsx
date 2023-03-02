import React from 'react'

import GithubCard from './GithubCard';
import "./DeveloperHome.css"

import Aos from 'aos';
import "aos/dist/aos.css"


export default function DeveloperHome() {
  return (
    <div className='Page-align'>
      <div className='Page-container'>
        <section className='GithubRepo-section'>
          <GithubCard Git_Link="https://google.com" gitName="School Github Repository" description="Location where the code is stored. (Click card)" />
        </section>

        <section className='DeveloperHome-Description'>

          <p className='Developer-Welcome-title'>Welcome Developer!</p>

          <div className='Developer-Info-holder'>

            <div className='Developer-Introduction-card Developer-Card'>
              <div className='Developer-Card-title Developer-Introduction-Title'>Introduction</div>
              <div >
                <ul className='Developer-Card-Description'>
                  <li>This website is made through <span><a className='Developer-link-tag' target="_blank" rel="noopener noreferrer"  href='https://beta.reactjs.org/'>ReactJS</a></span> & <span><a className='Developer-link-tag' href='https://firebase.google.com/' target="_blank" rel="noopener noreferrer">Firebase</a></span> </li>
                  <li>Website features some reusable <span className='developer-special-item'>components</span>, but you can code your own to make life easier</li>
                  <li>Website hosted on <span><a className='Developer-link-tag' href='https://www.netlify.com/?utm_source=google&utm_medium=paid_search&utm_campaign=12755510784&adgroup=118788138897&utm_term=netlify&utm_content=aud-840722397501:kwd-309804753741&creative=514583565825&device=c&matchtype=b&location=9010936&gclid=CjwKCAiAr4GgBhBFEiwAgwORrcbRpYBbpKaX0oR6hL5G-0bdA53JdRmQkSOi2k9S2irktTlDeSeA3RoC6kYQAvD_BwE'>Netlify</a></span></li>
                  <li><span><a className='Developer-link-tag' target="_blank" rel="noopener noreferrer" href='https://react-bootstrap.github.io/getting-started/introduction/'>React-Bootstrap</a></span> has also been used to make styling easier</li>
                  <li>Using RealtimeDatabase from <span><a className='Developer-link-tag' target="_blank" rel="noopener noreferrer"  href='https://firebase.google.com/'>Firebase</a></span> to store data</li>
                  <li>Slash commands are supported</li>
                  <li><span><a className='Developer-link-tag' href='https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'>ThreeJS-Fiber</a></span> used to upload 3-D models to this site</li>
                  <li>Models were made on <span><a className='Developer-link-tag' target="_blank" rel="noopener noreferrer"  href='https://www.blender.org/download/'>Blender</a></span></li>
                </ul>
              </div>
            </div>

            <div className='Developer-Starting-card Developer-Card'>
              <div className='Developer-Card-title Developer-Starting-Title'>Where to start?</div>
              <div >
                <ol className='Developer-Card-Description'>
                  <li>Install <span><a target="_blank" rel="noopener noreferrer"  className='Developer-link-tag' href='https://google.com'>node.js</a></span></li>
                  <li><span><a className='Developer-link-tag' href='https://google.com'>ReactJS</a></span> documentation</li>
                  <li>Click the card above</li>
                  <li>Once on <span><a target="_blank" rel="noopener noreferrer"  className='Developer-link-tag' href='https://google.com'>Github</a></span>, click the <span className='developer-special-item'>Code</span> button</li>
                  <li>Download the <span className='developer-special-item'>zip</span> & happy coding time!</li>
                </ol>
              </div>


            </div>

            <div className='Developer-Private-Features-card Developer-Card'>
              <div className='Developer-Card-title Developer-Private-Features-title'>Developer features (private)</div>
              <div >
                <ul className='Developer-Card-Description'>
                  <li><span className='developer-special-item'>Registered Users: </span> Database of users who registered to help build the website</li>
                  <li><span className='developer-special-item'>Contributors: </span>Database of contributors for this website.</li>
                </ul>
              </div>
            </div>

            <div className='Developer-Public-Features-card Developer-Card'>
              <div className='Developer-Card-title Developer-Public-Features-title'>Public Page Features</div>
              <div >
                <ul className='Developer-Card-Description'>
                  <li><span className='developer-special-item'>Homepage: </span> About teacher</li>
                  <li><span className='developer-special-item'>CourceExpectation: </span>Cource Expectation PDF's</li>
                  <li><span className='developer-special-item'>AP Computer Science: </span>About AP Computer Science class</li>
                  <li><span className='developer-special-item'>Web Development: </span>About Web Development class</li>
                  <li><span className='developer-special-item'>Business/ Computer Science: </span>About business class</li>
                  <li><span className='developer-special-item'>Contact: </span>Contact information about teacher & links for classrooms.</li>

                </ul>
              </div>


            </div>

          </div>

        </section>
      </div>
    </div>
  )
}
