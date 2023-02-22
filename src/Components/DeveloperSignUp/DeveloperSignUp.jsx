import React, { useEffect, useState } from 'react';

//from Firebase
import { ref, set, onValue } from "firebase/database";
import { db } from './Firebase';

//react bootstrap
import Dropdown from 'react-bootstrap/Dropdown';

//CSS import 
import "./CSS/DeveloperSignUp.css"

//ICONS import 
import { GiEagleHead } from "react-icons/gi"

export default function DeveloperSignUp() {
  const [registerName, setregisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [gradeLevel, setGradeLevel] = useState();

  const [firebaseData, setfirebaseData] = useState([]);


  useEffect(() => {
    const member_Count = ref(db, 'Developer Registered Users/');


    onValue(member_Count, (snapshot) => {

      let records = [];

      snapshot.forEach(function (element) {

        let keyName = element.key;
        let data = element.val();

        records.push({ "Key": keyName, "data": data });

      })

      setfirebaseData({ firebaseData: records })

    })
  }, [])

  function userData(event) {
    event.preventDefault();
    if (registerName === '') {
      alert("Please enter name")
    }

    else if (!registerEmail.includes("@drewcharterschools.org")) {
      alert("Please make sure you enter your Drew email\nOr make sure it's ends with drewcharterschools.org")
    }

    else if (gradeLevel === undefined || gradeLevel === '') {
      alert("Please select a grade level from the dropdown");
    }

    else {

      alert("Registered. ")

      //clearing the register email
      setregisterName('');
      setRegisterEmail('');
      setGradeLevel('');

      const date = new Date();
      const currentDay = date.getDate();
      const currentYear = date.getFullYear();
      const currentMonth = date.toLocaleString('default', { month: 'long' });

      set(ref(db, 'Developer Registered Users/' + registerName), {
        email: registerEmail,
        grade: gradeLevel,
        date: `${currentMonth} ${currentDay}, ${currentYear}`
      });

    }
  }

  return (
    <div className='Page-align'>
      <div className='Page-container'>
        <div className='DeveloperSignUp-Holder'>


          <div className='Register-card-holder'>


            <div className='SignUp-icon-holder'>
              <p className='Margin-maker-txt SignUp-icon'><GiEagleHead /></p>
            </div>

            <p className='Margin-maker-txt Register-title'>Register</p>

            <p className='Registration-Info'>Register here if you are interested on updating the website.</p>
            <div className='SignUp-Input'>
              <p className='Input-above-txt Margin-maker-txt'>First & Last name:</p>
              <input
                className='SignUp-Input-field'
                type="text"
                value={registerName}
                onChange={(e) => { setregisterName(e.target.value.toLowerCase()) }}
              />
            </div>

            <div className='SignUp-Input'>
              <p className='Input-above-txt Margin-maker-txt'>Drew Email:</p>
              <input
                className='SignUp-Input-field'
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value.toLowerCase())}
              />
            </div>


            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Grade
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => { setGradeLevel("9th Grade") }}>9th Grade</Dropdown.Item>
                <Dropdown.Item onClick={() => { setGradeLevel("10th Grade") }}>10th Grade</Dropdown.Item>
                <Dropdown.Item onClick={() => { setGradeLevel("11th Grade") }}>11th Grade</Dropdown.Item>
                <Dropdown.Item onClick={() => { setGradeLevel("12th Grade") }}>12th Grade</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>


            <button className='RegisterButton' onClick={userData}>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}
