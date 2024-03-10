import {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {
const [jokes,seJokes] = useState([])
useEffect(()=>{
  axios.get('/api/jokes')
  .then((res)=>{
    seJokes(res.data)
  })   
  .catch((err)=>{
    console.log(err)
  })
},[])
  return (
    <>
      <h2>Chai aur code</h2>
      <p>jokes : {jokes.length}</p>
      {
        jokes.length >0 && jokes.map((joke,index)=>(
          <div key={index}>
            <h5>`${joke.id}.)` {joke.question}</h5>
            <h6>{joke.answer}</h6>
          </div>
        ))
      }
      <div></div>
    </>
  )
}

export default App
