import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  
  function handleClick() {
  }
  
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup);
  return(
      <div className="App">
        {puppies.map((puppy) => {
            return ( <p className="card" onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}
            </p>
        )
   })}
    {featPupId && (
        <div className="Info">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li className="Info">Age: {featuredPup.age}</li>
            <li className="Info">Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
</div>
  )
}

export default App

