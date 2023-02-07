import React from 'react'

//Hooks import
import LinkButton from './Hook/Buttons';
import RemindButton from './Hook/Reminds';


import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { BiCodeAlt } from 'react-icons/bi';
import "./Contact-CSS/Contact.css"

// Importing Images 
import Eight from "../Contact/Images/Eight.png"
import Six_SevenGrade from "../Contact/Images/Six_SevenGrade.png"
import WebDev from "../Contact/Images/WebDev.png"
import APCSP from "../Contact/Images/APCSP.png"

export default function Contact() {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Contact Developer
        </Tooltip>


    );




    return (
        <>
            {/* <Phone /> */}

            <div className='Page-align'>

                <div className='Page-container'>

                    <section className='Contact-holder'>

                        <div className='Contact-teacher'>
                            <p className='Contact-title'>Contact the teacher</p>
                            <p className='Contact-info'>All communication should be during school hours. These hours are from 8AM-4:15pm M-F. Any communication after these hours, will receive a timely response the following school day.</p>


                            <div className='Links-holder'>

                                <div className='Button-Contact'>
                                    <LinkButton Name="Schedule a Meeting (30 Mins)" Link="https://calendly.com/jazmyne-mangham/30min?month=2023-01" />
                                    <LinkButton Name="E-mail Me" Link="https://google.com" />
                                    <LinkButton Name="Connect via Zoom" Link="https://drewcharterschool.zoom.us/j/6624735918?pwd=TXpYTFNjS1YwYkVkYlhDOHlwRjE4UT09#success" />

                                </div>

                                <p className='Remind-title'>Remind Links:</p>

                                <div className='Remind-links'>
                                    <RemindButton Name="6/7th Grade" Link="https://www.remind.com/classes/join?code=h6cfbh" RemindLogo={Six_SevenGrade} />
                                    <RemindButton Name="8th Grade" Link="https://www.remind.com/classes/join?code=b428866" RemindLogo={Eight} />
                                    <RemindButton Name="AP Computer Science" Link="https://www.remind.com/classes/join?code=d7ek7h3" RemindLogo={APCSP} />
                                    <RemindButton Name="Web Development" Link="https://www.remind.com/classes/join?code=ecge9k" RemindLogo={WebDev} />

                                </div>

                            </div>

                            <div className='Developer-contact'>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 350 }}
                                    overlay={renderTooltip}
                                >
                                    <a className='Code' rel="noopener noreferrer"  href='mailto:nnagedev@gmail.com?subject= Drew Charter Computer Science Website Assistance' target="_blank"><BiCodeAlt /> </a>
                                </OverlayTrigger>
                            </div>
                        </div>

                    </section>


                </div>
            </div>


        </>
    )
}
