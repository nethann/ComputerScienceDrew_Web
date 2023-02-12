import React, { useState, useEffect } from 'react';

import { FaTrash } from 'react-icons/fa'

import { db } from '../../DeveloperSignUp/Firebase';
import { ref, onValue, remove } from "firebase/database";

import "./CSS/FirebaseData.css";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DataFetch() {
    const [firebaseData, setfirebaseData] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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


    return (
        <div className='Firebase-holder'>
            <p>Users who volunteered to help this website.</p>
            <table className='Firebase-table' >
                <thead>
                    <tr className='Special-tr'>
                        <th style={{ width: "25%" }}>Name</th>
                        <th>Email</th>
                        <th style={{ width: "15%" }}>Grade</th>
                        <th style={{ width: "20%" }}>Date</th>
                        <th style={{ width: "10%" }}>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {firebaseData.firebaseData?.map(item => {

                        return (
                            <>
                                <tr>
                                    <th>{item.Key}</th>
                                    <th>{item.data.email}</th>
                                    <th>{item.data.grade}</th>
                                    <th>{item.data.date}</th>
                                    {/* <th className='delete-th'>
                                    <button onClick={() => { remove(ref(db, 'Users/' + item.Key)) }} className='del-btn'>{<FaTrash />}</button>
                                </th> */}
                                    <th className='delete-th'>
                                        <button onClick={handleShow} className='del-btn'>{<FaTrash />}</button>
                                    </th>
                                </tr>


                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Conformation</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body><li>Are you sure you want to delete this item?</li></Modal.Body>
                                    <Modal.Body><li>This cannot be undone.</li></Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>

                                        <Button variant="primary" onClick={() => [remove(ref(db, 'Users/' + item.Key)), handleClose()]}>
                                            Delete
                                        </Button>

                                        
                                    </Modal.Footer>
                                </Modal>

                            </>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}
