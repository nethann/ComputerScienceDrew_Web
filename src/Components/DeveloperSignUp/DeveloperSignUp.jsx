import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "./Firebase"


export default function DeveloperSignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [isDisabledEmail, setisDisabledEmail] = useState(false);
    const [isDisabledPassword, setisDisabledPassword] = useState(false);

    const register =  async () => {
        try{
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword).then(() => {
                setisDisabledEmail(true);
                setisDisabledPassword(true);
            })

        }catch (error){
            console.log(error);
        }
    }
  return (
    <div style={{color: "white"}}>
      <p>Register</p>
      <input type="text" disabled={isDisabledEmail} onChange={(event) => {setRegisterEmail(event.target.value)}} placeholder='username' />
      <input type="password" disabled={isDisabledPassword} onChange={(event) => {setRegisterPassword(event.target.value)}} placeholder='password' />
      <button onClick={register}>Sign Up</button>
    </div>
  )
}
