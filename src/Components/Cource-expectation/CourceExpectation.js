import React from 'react'

//CSS
import "./Cource-CSS/Cource.css";
import "../Global/Global.css";

//PDF export
import Comp from "../Cource-expectation/Comp.pdf"
import ClassRules from "../Cource-expectation/ClassRules.pdf"


//modules import
import Typewriter from 'typewriter-effect';

export default function CourceExpectation() {
    return (
        <div className='Page-align'>
            <div className='Page-container'>
                <section className='Expectations-section'>
                    <p className='Title'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Course Expectations.')
                                    .start();
                            }}
                        />
                    </p>
                </section>
                <section className='Cource-page'>
                    <iframe className='i-frame' title='ClassRules' src={ClassRules}></iframe>
                    <iframe className='i-frame' title='Comp' src={Comp}></iframe>
                </section>
            </div>
        </div>
    )
}
