import React from 'react'
import { useState } from 'react';


import { useNavigate } from 'react-router-dom';


//CSS import 
import "./CSS/DeveloperLogin.css";

//ICONS Import 
import { GiEagleEmblem } from "react-icons/gi";


export default function DeveloperLogin() {

    //getting the input value
    const [inputText, setInputText] = useState('');

    const handleValues = (event) => {
        event.preventDefault();
        setInputText(event.target.value);
    }

    let navigate = useNavigate();

    function Logging() {
        //fetching the current year
        const date = new Date();
        let currentYear = date.getFullYear();

        if (inputText.toLowerCase() === `drew${currentYear}`) {
            window.localStorage.setItem("Authenticated", true);
        }

        else {
            console.log("wrong")
            window.localStorage.removeItem("Authenticated");
        }

        if (JSON.parse(localStorage.getItem("Authenticated")) === true) {
            navigate("/developer");
        }

    }


    const DeveloperSignUp = () => {
        navigate("/DeveloperSignUp");
    }


    return (
        <div className='Page-align'>
            <div className='Page-container'>
                <section className='Login-Ui'>
                    <div className='Login-Card'>

                        <div className='Admin-Icon-holder'>
                            <p className='Admin-Icon'><GiEagleEmblem /> </p>
                        </div>

                        <div className='Logging-info'>
                            <p className='Login-title'>Admin Login</p>
                            <p className='Login-info'>Sign in to Admin Dashboard</p>
                        </div>

                        <div className='Password-manager'>
                            <p className='Password-title'>Password: </p>
                            <input
                                className='Password-input'
                                type="text"
                                id="message"
                                name="message"
                                onChange={handleValues}
                                value={inputText}
                            />
                        </div>

                        <button className='LogCheck-btn' onClick={() => {Logging()}}>Login</button>

                        <div className='Sign-up-Border'>
                            <button className='Sign-up' onClick={() => { DeveloperSignUp() }}>Register</button>
                        </div>

                    </div>
                </section>
            </div>
        </div>

    )
}
