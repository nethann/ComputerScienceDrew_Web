import React from 'react'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

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
            window.localStorage.setItem("Logging", true);
        }

        else {
            window.localStorage.setItem("Logging", false);
        }

        if (JSON.parse(localStorage.getItem("Logging")) === true) {
            navigate("/developer");
        }

    }

    return (
        <div>
            <input
                type="text"
                id="message"
                name="message"
                onChange={handleValues}
                value={inputText}
            />
            <button onClick={() => { Logging() }}>Login</button>
        </div>
    )
}
