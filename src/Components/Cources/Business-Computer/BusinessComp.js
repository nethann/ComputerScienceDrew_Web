import React from 'react'

//importing CSS
import "./CSS/BusinessComp.css"

import Sections from '../Utils/Sections/Sections'

import JAComputerScience from "./JAComputerScience.pdf"

export default function BusinessComp() {
  return (
    <div className='Page-align'>
      <div className='Page-container'>
        <Sections pageTitle="Business/ Computer Science" pageInfo="This course is a first-time introduction to business, game design and web design and requires students to come in with no computer programming skills or experience. It uses a blended classroom approach with video tutorials, slide presentations, short quizzes, written assignments, and collaborative creation projects." />

        <section className='BeachCleanUp-holder'>
          <div className='BeachCleanUp-container'>
            <p className='Margin-maker-txt BeachCleanUp_Title'>Code for a Change: Beach cleanup Game</p>

            <div className='BeachCleanUp_Btn-Holder'>
              <a target="_blank" href="https://scratch.mit.edu/projects/762799080" className="BeachCleanUp_Links">E.Fredo</a>
              <a target="_blank" href="https://scratch.mit.edu/projects/762812580" className="BeachCleanUp_Links">C.Grant</a>
              <a target="_blank" href="https://scratch.mit.edu/projects/763435385" className="BeachCleanUp_Links">G.Dergruy</a>
              <a target="_blank" href="https://scratch.mit.edu/projects/769226684" className="BeachCleanUp_Links">J.Graham</a>
              <a target="_blank" href="https://scratch.mit.edu/projects/763551977" className="BeachCleanUp_Links">E.An</a>
              <a target="_blank" href="https://scratch.mit.edu/projects/769325086" className="BeachCleanUp_Links">A.Peterson</a>
            </div>
          </div>

        </section>


        <section className='Resource-section'>
          <div className='ResourceTitle'>
            <p className='Margin-maker-txt'>Resources</p>
          </div>


          <div className='Comp-Resources-content-holder'>

            <div className='Comp-Resource'>
              <div className='Comp-Resource-Btn-Holder'>
                <a href='https://lor2.gadoe.org/gadoe/file/e2f26021-e8c3-4615-b893-703b0c0607f9/1/K-8%20CS%20Content%20Standards%20MS%20Computer%20Science%20I.pdf' className='Business-ResourceBtn' target="_blank">Georgia Standards of Excellence</a>
              </div>
              <iframe className='Comp-i-frame' title='Class-Syllabus' src={JAComputerScience}></iframe>
            </div>

          </div>

        </section>

      </div>
    </div>
  )
}
