import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import FirebaseData from "./utils/DeveloperHome/FirebaseData"
import Contributors from "./utils/Contributors"
import DeveloperHome from './utils/DeveloperHome/DeveloperHome';
export default function Developer() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <DeveloperHome />
      </Tab>

      <Tab eventKey="profile" title="Registered Users">
        <FirebaseData />
      </Tab>
      
      <Tab eventKey="Contributors" title="Contributors">
        <Contributors /> 
      </Tab>


    </Tabs>
  )
}
