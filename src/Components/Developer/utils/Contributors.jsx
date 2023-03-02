import React, { useState, useEffect } from 'react';

//Importing CSS
import "./CSS/Contributors.css"

//Importing from Firebase
import { db } from '../../DeveloperSignUp/Firebase';
import { ref, set, onValue, remove } from "firebase/database";

import { FaTrash } from 'react-icons/fa'



export default function ContributorsData() {


  const [first_last_name, setFirst_Last_Name] = useState("");
  const [schoolEmail, setSchoolEmail] = useState("");
  const [contributorRole, setContributorRole] = useState("")

  const [firebaseData, setfirebaseData] = useState([]);

  useEffect(() => {
    const member_Count = ref(db, 'Contributors/');


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
    if (first_last_name === '') {
      alert("Please enter name");
    }

    else if (!schoolEmail.includes("@drewcharterschools.org")) {
      alert("Please make sure you enter your Drew email\nOr make sure it's ends with drewcharterschools.org");
    }

    else if (contributorRole === '') {
      alert("Please enter role")
    }

    else {

      alert("Registered. ");

      //clearing the register email
      setFirst_Last_Name('');
      setSchoolEmail('');
      setContributorRole('')

      const date = new Date();
      const currentDay = date.getDate();
      const currentYear = date.getFullYear();
      const currentMonth = date.toLocaleString('default', { month: 'long' });

      set(ref(db, 'Contributors/' + first_last_name), {
        name: first_last_name,
        email: schoolEmail,
        role: contributorRole,
        date: `${currentMonth} ${currentDay}, ${currentYear}`
      });

    }
  }




  return (
    <div className='Page-align'>
      <div className='Page-container'>
        <section className='Contributor-holder'>
          <p className='Margin-maker-txt'>Add Contributor to the database</p>
          <div className='Input-Section'>

            <input
              className='Contributor-Inputs'
              placeholder='First & Last name '
              type="text"
              value={first_last_name}
              onChange={(e) => { setFirst_Last_Name(e.target.value.toLowerCase()) }}

            />

            <input
              className='Contributor-Inputs'
              placeholder='School Email'
              type="text"
              value={schoolEmail}
              onChange={(e) => { setSchoolEmail(e.target.value.toLowerCase()) }}
            />

            <input
              className='Contributor-Inputs'
              placeholder='Contributor Role'
              type="text"
              value={contributorRole}
              onChange={(e) => { setContributorRole(e.target.value.toLowerCase()) }}
            />

            <button onClick={userData}>Add Contributor</button>

          </div>
          <div className='ContributorsTable-section'>
            <p className='Contributors-Title'>Contributors Database</p>

            <div style={{width: '100%'}} className="Firebase-table-holder">
              <table className='Firebase-table' >
                <thead>
                  <tr className='Special-tr'>
                    <th className='th-1'>Name</th>
                    <th className='th-2'>Email</th>
                    <th className='th-4'>Date</th>
                    <th className='th-4'>Role</th>
                    <th className='th-5'>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {firebaseData.firebaseData?.map(item => {

                    return (
                      <>
                        <tr>
                          <td>{item.Key}</td>
                          <td>{item.data.email}</td>
                          <td>{item.data.date}</td>
                          <td>{item.data.role}</td>

                          <td className='delete-th'>
                            <button onClick={() => { remove(ref(db, "Contributors/" + item.Key)) }} className='del-btn'>{<FaTrash />}</button>
                          </td>
                        </tr>

                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>



          </div>
        </section>
      </div>
    </div>
  )
}
