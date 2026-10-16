import React from 'react'

export default function signup() {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col gap-5'>
            
        <form action="" className='flex flex-col gap-5 w-1/4'>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type="submit">Signup</button>
        </form>
        <div>Already have an account? <a href="/login" className='font-bold text-blue-600'>Login</a></div>
        </div>
    </div>
    </>
  )
}
