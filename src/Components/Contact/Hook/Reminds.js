
//importing
import React from 'react';


//CSS
import "../Contact-CSS/RemindLogo.css"


export default function Reminds({ Name, Link, RemindLogo }) {
    return (
        // <a className='Remind-Button'  rel="noopener noreferrer" href={Link} target="_blank">
        //     <img alt='RemindLogo' className='RemindLogo' src={RemindLogo} />
        //     <p>@Remind</p>
        //     {Name}
        // </a>

        <div className='Remind-Holder'>
            <img alt="RemindLogo" className='RemindLogo' src={RemindLogo} /> 
            <p className='Remind-Name '>{Name}</p>
            <p className='Platform-title'>@Remind</p>
            <a target="_blank" rel="noopener noreferrer" className='Remind-Join' href={Link}>Join</a>
        </div>
    )
}
