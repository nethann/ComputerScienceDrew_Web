import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import DataFetch from './utils/FirebaseData';
import Contributors from "./utils/Contributors"

export default function Developer() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <p>Home</p>
      </Tab>

      <Tab eventKey="profile" title="Registered Users">
        <DataFetch />
      </Tab>
      
      <Tab eventKey="Contributors" title="Contributors">
        <Contributors /> 
      </Tab>

      <Tab eventKey="contact" title="Events">
        <p>Contact</p>
      </Tab>

    </Tabs>
  )
}
