import React from 'react'
import Header from '../components/Header';
import CreateEventForm from '../components/CreateEventForm';


export default function CreateEventNew() {
  return (
    <div>
        <header>
            <Header/>
        </header>
        <div>
            <CreateEventForm/>
        </div>
    </div>
  )
}
