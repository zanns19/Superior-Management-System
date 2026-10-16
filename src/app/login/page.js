import React from 'react'

export default function login() {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <form className='flex flex-col gap-5 w-1/4' action="">
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            <button type="submit">Login</button>
        </form>
    </div>
        <div>Did'nt Have account? <a href='/signup' className='font-bold text-blue-600'>Sign Up</a></div>
    </>
  )
}
