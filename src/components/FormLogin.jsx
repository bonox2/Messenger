import { useState } from "react"
import React from 'react'
import { useAuth } from '../hooks/useAuth';


function Login() {

  return (
    <form className='reg_form'>
        <input name='email' 
        type='text' 
        placeholder='Enter your email'/>

        <input name='password' 
        type='text' 
        placeholder='Enter your password'/>
        <button className='actionbtn' type='submit' onClick={useAuth}>
          Login
        </button>
    </form>
  )
}

export default Login