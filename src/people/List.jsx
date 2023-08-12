import React from 'react'
import './List.css'
import { FaTrash } from 'react-icons/fa6';




const List = ({people,deletePerson}) => {
  
  return (
    <div>
  
    <ul>

  {people&&people.map((user)=>{
  const {id,image,name,age} =user
    return(
      <li className='userList' key={id}>
        <div className='user'>
        <img className='userImg' src={image} alt={name} width={75} height={75}/>
        
        <div className="info">
        <h1 className='userName' >{name}</h1>
        <p>{age} years</p>
        </div>
        </div>

        <FaTrash className="trash-icon"  onClick={()=>{deletePerson(id)}}>Trahs</FaTrash>
      </li>
    )
   })}
  </ul> 
    </div>
  )
}

export default List