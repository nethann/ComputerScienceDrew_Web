import React, { useState, useEffect } from 'react';

import { FaTrash } from 'react-icons/fa'

import { db } from '../../../DeveloperSignUp/Firebase';
import { ref, onValue, remove } from "firebase/database";

import "./CSS/FirebaseData.css";
import "./CSS/DeveloperTabs.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function DataFetch() {
    const [firebaseData, setfirebaseData] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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


    return (
        <div className='Firebase-holder'>
            <p>Users who volunteered to help this website.</p>
            <table className='Firebase-table' >
                <thead>
                    <tr className='Special-tr'>
                        <th className='th-1'>Name</th>
                        <th className='th-2'>Email</th>
                        <th className='th-3'>Grade</th>
                        <th className='th-4'>Date</th>
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
                                    <td>{item.data.grade}</td>
                                    <td>{item.data.date}</td>

                                    <td className='delete-th'>
                                        <button onClick={() => {remove(ref(db, "Developer Registered Users/" + item.Key))}} className='del-btn'>{<FaTrash />}</button>
                                    </td>
                                </tr>

                            </>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}