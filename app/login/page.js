"use client"
import React from 'react'
import { useState } from 'react'

export default function login() {
  const [form, setForm] = useState({email:"",password:""})
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [showpassword, setShowpassword] = useState(false)
  
  const handlechange=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
setErrors({...errors,[e.target.name]:""})
  }
  const Validate=()=>{
    const next = {}
    if(!form.email.trim()) next.email="Email is empty"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
       next.email = "Enter a valid Email"
    if(!form.password) next.password="Pasword is empty"
    else if(form.password.length<8) next.password="Password must contain 8 or more characters"
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(form.password))
   next.password = "Password must contain uppercase, lowercase, numbers, and symbols (min 8 chars)"
    setErrors(next)
    return Object.keys(next).length===0
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    if (!Validate()) return;
    setLoading(true)
    setTimeout(() => {
      console.log("ilahi")
      setLoading(false)
    }, 4000);
  }
  return (
    <main style={{minHeight:'100vh', display:'grid', placeItems:'center', padding:'24px', boxSizing:'border-box', background:'linear-gradient(135deg, #eef2ff, #f8fafc 55%, #e0f2fe)', fontFamily:'Inter, ui-sans-serif, system-ui, sans-serif'}}>
      <section style={{width:'100%', maxWidth:'420px', padding:'40px', boxSizing:'border-box', background:'#fff', border:'1px solid #e5e7eb', borderRadius:'20px', boxShadow:'0 24px 60px rgba(15, 23, 42, .10)'}}>
        <div aria-hidden="true" style={{width:'48px', height:'48px', display:'grid', placeItems:'center', marginBottom:'24px', borderRadius:'14px', background:'#eef2ff', color:'#4f46e5', fontSize:'22px', fontWeight:700}}>S</div>
        <p style={{margin:'0 0 8px', color:'#4f46e5', fontSize:'13px', fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase'}}>Welcome back</p>
        <h1 style={{margin:0, color:'#111827', fontSize:'30px', lineHeight:1.2, letterSpacing:'-.03em'}}>Sign in to your account</h1>
        <p style={{margin:'10px 0 28px', color:'#6b7280', fontSize:'15px', lineHeight:1.5}}>Enter your details below to continue.</p>
        <form onSubmit={handlesubmit} noValidate>
          <div style={{marginBottom:'20px'}}>
            <label htmlFor="email" style={{display:'block', marginBottom:'8px', color:'#374151', fontSize:'14px', fontWeight:600}}>Email address</label>
            <input  className={`${errors.email ? "border-red-400 focus:ring-red-200": "border-[#CBD5E1] focus:border-[#0B6E4F] focus:ring-[#0B6E4F]/20"}`} type="email" id="email" name="email" autoComplete="email" required value={form.email} onChange={handlechange} placeholder="you@example.com" style={{width:'100%', boxSizing:'border-box', padding:'12px 14px', border:'1px solid #d1d5db', borderRadius:'10px', color:'#111827', fontSize:'15px', background:'#fff'}} />
          {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          </div>
          <div style={{marginBottom:'24px'}}>
            <label htmlFor="password" style={{display:'block', marginBottom:'8px', color:'#374151', fontSize:'14px', fontWeight:600}}>Password</label>
            <div className="relative">

            <input className={`${errors.password? "border-red-400 focus:ring-red-200": "border-[#CBD5E1] focus:border-[#0B6E4F] focus:ring-[#0B6E4F]/20"}`} type={showpassword?"text":"password"} id="password" name="password" autoComplete="current-password" required value={form.password} onChange={handlechange} placeholder="Enter your password" style={{width:'100%', boxSizing:'border-box', padding:'12px 14px', border:'1px solid #d1d5db', borderRadius:'10px', color:'#111827', fontSize:'15px', background:'#fff'}}
             />
             <button 
             type='button' 
             onClick={()=>setShowpassword((v)=>!v)}
             aria-label={showpassword?"Hide Password":"show Password"}
             className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0B2027]"
                
             > 
              {showpassword?<EyeOffIcon/>:<EyeIcon/>}
             </button>
             </div>
          {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
          </div>
          <button disabled={loading}   className="w-full rounded-lg bg-[#0B2A2A] text-white text-sm font-medium py-2.5 transition hover:bg-[#0B6E4F] disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#0B6E4F]/40 focus:ring-offset-2"
            type="submit" style={{width:'100%', padding:'13px 16px', border:0, borderRadius:'10px', background:'#4f46e5', color:'#fff', fontSize:'15px', fontWeight:700, cursor:'pointer', boxShadow:'0 6px 14px rgba(79, 70, 229, .22)'}}>{loading ? "Signing in…" : "Sign in"}</button>
        </form>
        <p style={{margin:'24px 0 0', textAlign:'center', color:'#9ca3af', fontSize:'13px'}}>Secure sign-in</p>
      </section>
    </main>
  )
}
function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17.94 17.94A10.94 10.94 0 0112 19c-7 0-11-7-11-7a21.6 21.6 0 015.06-5.94M9.9 4.24A10.94 10.94 0 0112 4c7 0 11 7 11 7a21.6 21.6 0 01-2.61 3.68" />
      <path d="M14.12 14.12a3 3 0 10-4.24-4.24" />
      <path d="M1 1l22 22" />
    </svg>
  );
}
