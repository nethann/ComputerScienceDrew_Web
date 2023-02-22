import React, { useState, useEffect } from 'react';

//firebase
import { ref, set, onValue, remove } from "firebase/database";
import { db } from '../DeveloperSignUp/Firebase';

//css importing
import "./CSS/ContributorsPublic.css"

export default function ContributorsPublic() {

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

    return (
        <div className='Page-align'>
            <div className='Page-container'>
                <section className='PubilcContributors-Section'>
                    <div className='PublicContributors-Holder'>

                        {firebaseData.firebaseData?.map(item => {

                            return (
                                <>
                                    <div className='PublicContributor-Cards' key={item.key}>
                                        <p className='Margin-maker-txt PublicContributor_Name PublicContributor_Txt'>{item.data.name}</p>
                                        <p className='Margin-maker-txt PublicContributor_Txt'>{item.data.email}</p>
                                        <p className='Margin-maker-txt PublicContributor_Role PublicContributor_Txt'>{item.data.role}</p>
                                    </div>

                                </>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}
