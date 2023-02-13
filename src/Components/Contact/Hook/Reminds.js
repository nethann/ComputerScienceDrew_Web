
//importing
import React from 'react';


//CSS
import "../Contact-CSS/RemindLogo.css"


export default function Reminds({ Name, Link, RemindLogo }) {
    return (

        <div className='Remind-Holder'>
            <img alt="RemindLogo" className='RemindLogo' src={RemindLogo} /> 
            <p className='Remind-Name '>{Name}</p>
            <p className='Platform-title'>@Remind</p>
            <a target="_blank" rel="noopener noreferrer" className='Remind-Join' href={Link}>Join</a>
        </div>
    )
}
