import React from 'react'
import { useState } from 'react';

export default function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    async function registeredUser(event){
        event.preventDefault()
       
        const response= await fetch('http://localhost:1337/api/login',{
         method:'POST',
         headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            email,
            password,
          })
        })
    
        const data =await response.json();
        console.log(data);
        if(data.user){
            localStorage.setItem('auth-token',data.user);
            alert('Login Successful');
            window.location.href='/home';
        }else{
            alert("please check your username and password");
        }
  
        console.log(data);
      }
    return (
        <div >
         <h1>
           login
         </h1>
         <form onSubmit={registeredUser}>
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
