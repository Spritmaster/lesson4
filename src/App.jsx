import React from 'react'
import { useState } from 'react'
import users from './data/users'
import List from './people/List'
import { FiRefreshCw } from 'react-icons/fi';

const App = () => {

  const [people, setPeople]=useState(users)
    const deletePerson = (id) => {
   const newPeople = people.filter((person) => {
      return person.id !== id
    })
    setPeople(newPeople)
  }

  return (
   <div className='container'>
    <h1 className='birthdayTitle'>{people ? people.length: 0} Birthdays Today</h1>
    <List people={people} deletePerson={deletePerson}></List>
     {people.length ? <button onClick={()=>{setPeople(null)}} className='clearBtn'>Clear All</button>:null}
     {!people.length && <button onClick={()=>{setPeople(users)}} className='refresh'><FiRefreshCw></FiRefreshCw> Refresh</button>}
   </div>
  )
}

export default App
