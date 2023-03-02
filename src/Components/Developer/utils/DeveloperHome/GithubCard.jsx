import React from 'react';

import github from "./Images/github.png"
import "./GithubCard.css"

export default function GithubCard({ Git_Link, gitName, description }) {
    return (

        <a href={Git_Link} target="_blank" rel='nonforever' className='Git-Card'>

            <div className='Git-Card-FirstSection'>
                <img src={github} className='Git-Img' alt='Logo' />
                <p className='Git-Name'>{gitName}</p>
            </div>

            <div className='Git-Card-SecondSection'>

                <li className='git-Description'>{description}</li>

                <div className='Lang-Container'>
                    <p className='Special-JS Languages'>JavaScript</p>
                </div>

            </div>

        </a>

    )
}
