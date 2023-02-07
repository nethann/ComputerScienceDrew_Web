import React from 'react';

import Computer from './Computer';

//css
import "../Global/Global.css";
import "./Home-CSS/Home.css";


//images
import Jazmyne from "../Images/Jazmyne.png"

//modules import 
import { useNavigate } from 'react-router-dom';



export default function Home() {

  const navigate = useNavigate();
  return (
    <div className='Page-align'>
      <div className='Page-container'>
        <section >
          <Computer />
        </section>

        <section className='Home-pathway'>
          <div className='Pathway-card'>
            <div>
              <p className='Pathway-Title'>Pathway Course Overview:</p>
              <p className='Pathway-Info'>Pathway Courses at Charles Drew Charter School allow students to explore and then specialize in areas of their interest. All students must take pathway courses, and Pathway coursework is a requirement for promotion and graduation. Expect Pathway courses to match or exceed core courses in rigor and workload. </p>
            </div>

            <div className='About-Teacher'>
              <div className='Teacher-Contact'>
                <div className='Teacher-Top'>
                  <img className='Jazmyne' src={Jazmyne} alt="Jazmyne" />
                  <button className='Teacher-Contact-btn' onClick={() => { navigate('/contact') }}>Contact</button>
                </div>

                <div className='Teacher-Name'>
                    <p>@Jazmyne Mangham</p>
                </div>

                <div className='Teacher-Info'>
                  <li>I have been an educator since 2015, starting in Early Childhood education. I have been in the public school system for a total of 4 years.  This is also my 2nd year teaching Computer Science. </li>
                  <li>Welcome, Students! I am so excited to embark on this new instructional school year with you! I am looking forward to getting to know each and every one of you! </li>
                </div>

              </div>


            </div>

          </div>

        </section>


      </div>
    </div>
  )
}
