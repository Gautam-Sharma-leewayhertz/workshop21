import React from 'react'
import {useState} from 'react'

export default function Register() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

  
    async function registeredUser(event){
      event.preventDefault()
      const response= await fetch('http://localhost:1337/api/register',{
       method:'POST',
       headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          name,
          email,
          password,
        })
      })
  
      const data =await response.json();
      console.log(data);
    }
  
    return (
      <div >
       <h1>
         Register
       </h1>
       <form onSubmit={registeredUser}>
         <input value={name}
         onChange={(e)=>setName(e.target.value)}
         type="text"
         placeholder='Name'
         /><br/>
         
        <input value={email}
         onChange={(e)=>setEmail(e.target.value)}
         type="email"
         placeholder='email'
         /><br/>
        <input value={password}
         onChange={(e)=>setPassword(e.target.value)}
         type="password"
         placeholder='password'
         /><br/>
  
         <button type='submit'>
           click me
         </button>
         
         </form>
      </div>
   );
}
