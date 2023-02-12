import React, { useEffect,useState } from 'react';

//from Firebase
import { ref, set, onValue } from "firebase/database";
import { db } from './Firebase';

//react bootstrap
import Dropdown from 'react-bootstrap/Dropdown';


export default function DeveloperSignUp() {
  const [registerName, setregisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [gradeLevel, setGradeLevel] = useState();

  const [firebaseData, setfirebaseData] = useState([]);


  useEffect(() => {
    const member_Count = ref(db, 'Users/');


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
      alert("Please enter proper email")
    }

    else if (gradeLevel === undefined) {
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

      set(ref(db, 'Users/' + registerName), {
        email: registerEmail,
        grade: gradeLevel,
        date: `${currentMonth} ${currentDay}, ${currentYear}`
      });

    }
  }

  return (
    <div style={{ color: "white" }}>

      <p>Register</p>

      <input
        placeholder='First and Last Name'
        type="text"
        value={registerName}
        onChange={(e) => { setregisterName(e.target.value) }}
      />

      <input
        placeholder='Drew Email'
        type="email"
        value={registerEmail}
        onChange={(e) => setRegisterEmail(e.target.value)}
      />


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


      <button onClick={userData}>Register</button>

    </div>
  )
}
