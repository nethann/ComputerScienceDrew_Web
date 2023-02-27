import React from 'react'

//importing Utils
import Sections from '../Utils/Sections/Sections'
import Carousels from '../Utils/ComputerScience_Carousels/Carousels'

import "./APComp.css"

//importing PDF
import CompSci_Resources from "./PDFs/CompSci_Resources.pdf";
import APComp_Syllabus from "./PDFs/APComp_Syllabus.pdf";

import Accordion from 'react-bootstrap/Accordion';



export default function APComp() {
    return (
        <div className='Page-align'>
            <div className='Page-container'>
                <Sections pageTitle="AP Computer Science Principles" pageInfo="AP Computer Science Principles introduces students to the breadth of the field of computer science. In this course, students will learn to design and evaluate solutions and to apply computer science to solve problems through the development of algorithms and programs. They will incorporate abstraction into programs and use data to discover new knowledge. Students will also explain how computing innovations and computing systems, including the Internet, work, explore their potential impacts, and contribute to a computing culture that is collaborative and ethical. It is important to note that the AP Computer Science Principles course does not have a designated programming language. Teachers have the flexibility to choose a programming language(s) that is most appropriate for their students to use in the classroom. -College Board" />

                <section className='Carousels-main'>
                    <Carousels />
                </section>

                <section className='Web-spotlights-holder'>
                    <p className='Spotlight-title'>Spotlights</p>
                    <div className='Web-spotlights'>
                        <div className='Side-1'>
                            <p className='Sides-title'>Pair - Programming Sample Create Tasks</p>
                            <a rel="noopener noreferrer" className='Spotlight-Link-1 Spotlight-1' href='https://codehs.com/share/id/create-your-ultrakarel-image-xS8zAD/run' target="_blank">Eniyah & Kemyah</a>
                            <a rel="noopener noreferrer" className='Spotlight-Link-1 Spotlight-2' href='https://codehs.com/share/id/create-your-ultrakarel-image-N7l3Ip/run' target="_blank">Ruby & Emma</a>
                            <a rel="noopener noreferrer" className='Spotlight-Link-1 Spotlight-3' href='https://codehs.com/share/id/create-your-ultrakarel-image-E03bbc/run' target="_blank">Alexander & Oskar</a>
                            <a rel="noopener noreferrer" className='Spotlight-Link-1 Spotlight-4' href='https://codehs.com/share/id/create-your-ultrakarel-image-PYsYPg/run' target="_blank">Masai & Niles</a>
                            <a rel="noopener noreferrer" className='Spotlight-Link-1 Spotlight-5' href='https://codehs.com/share/id/create-your-ultrakarel-image-0RhU9H/run' target="_blank">Thihini & Alia</a>
                            <a rel="noopener noreferrer" className='Spotlight-Link-1 Spotlight-6' href='https://codehs.com/share/id/create-your-ultrakarel-image-tIms14/run' target="_blank">Imari & Ziya</a>
                        </div>
                        <div className='Side-2'>
                            <p className='Sides-title'>Program a Friend</p>
                            <iframe className='Spotlight-vid' src="https://www.youtube.com/embed/GibiNy4d4gc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                    </div>
                </section>


                <section className='Resource-section'>
                    <div className='ResourceTitle'>
                        <p className='Margin-maker-txt'>Resources</p>
                    </div>

                    <div className='Comp-Resources-content-holder'>
                        <div className='Comp-Resource'>
                            <iframe className='Comp-i-frame' title='Class-Syllabus' src={APComp_Syllabus}></iframe>
                        </div>

                        <div className='Comp-Resource'>
                            <div className='Comp-Resource-Btn-Holder'>
                                <a href='https://meinzeit.com/APConsult-CSP-5Day/LO-EK.htm' className='Comp-ResourceBtn' target="_blank">Carriculum Framework in a Nutshell</a>
                                <a href='https://www.mathsisfun.com/metric-numbers.html' className='Comp-ResourceBtn' target="_blank">Metric Numbers</a>
                            </div>
                            <iframe className='Comp-i-frame' title='Class-Syllabus' src={CompSci_Resources}></iframe>
                        </div>



                    </div>

                </section>
            </div>
        </div>
    )
}
