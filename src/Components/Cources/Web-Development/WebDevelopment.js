import React from 'react'

//importing components
import Sections from '../Utils/Sections/Sections'

import "./CSS/WebDevelopment.css"

import WebDev_Syllabus from "./WebDev_Syllabus.pdf"
import WebAgencyRubric from "./WebAgencyRubric.pdf"

export default function WebDevelopment() {
    return (
        <div className='Page-align'>
            <div className='Page-container'>
                <Sections pageTitle="Web Development" pageInfo="The Web Development Capstone Course is intended to teach students the fundamentals of web development in a project-based learning environment. Students will be taught the basic elements of web development, such as web hosting, file organization, and incorporating Javascript into HTML files. Over the course of the school year, students will collaboratively and independently design, develop and implement functional and responsive web pages using these foundational skills." />

                <section className='Resource-section'>
                    <div className='ResourceTitle'>
                        <p className='Margin-maker-txt'>Resources</p>
                    </div>


                    <div className='Comp-Resources-content-holder'>

                        <div className='Comp-Resource'>
                            <div className='Comp-Resource-Btn-Holder'>
                                <a href='https://lor2.gadoe.org/gadoe/file/e2f26021-e8c3-4615-b893-703b0c0607f9/1/K-8%20CS%20Content%20Standards%20MS%20Computer%20Science%20I.pdf' className='Web-ResourceBtn' target="_blank">Carriculum Framework in a Nutshell</a>
                            </div>
                            <iframe className='Comp-i-frame' title='Class-Syllabus' src={WebDev_Syllabus}></iframe>
                            <div className='Comp-Resource'>
                                <iframe className='Comp-i-frame' title='Class-Syllabus' src={WebAgencyRubric}></iframe>
                            </div>
                        </div>

                    </div>

                </section>

            </div>
        </div>
    )
}
