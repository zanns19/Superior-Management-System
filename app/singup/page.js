"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
export default  function singup() {
  const router= useRouter()
  const [form, setForm] = useState({username:"",email:"",password:""})
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [showpassword, setShowpassword] = useState(false)
  const [confirmpassword, setConfirmpassword] = useState("")
  const [ServerError, setServerError] = useState("")
  const handlechange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
    setErrors({...errors,[e.target.name]:""})
  }
   const validate = () => {
    const next = {};
    if (!form.username.trim()) next.username = "Username is required";
    else if (form.username.trim().length < 3)
      next.username = "Username must be at least 3 characters";

    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address";

    if (!form.password) next.password = "Password is required";
    else if (form.password.length < 8)
      next.password = "Password must be at least 8 characters";

    if (confirmpassword !== form.password)
      next.confirmpassword = "Passwords do not match";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

const handleSubmit= async(e)=>{
  e.preventDefault()
  if(!validate()) return;
  setLoading(true)
try {
  const res = await fetch(`${API_URI}/auth/api/register`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    credentials:"include",
    body:JSON.stringify(form)
  })
  const data = await res.json()
  if(!res.ok){
    setServerError(data.message|| "Registration Failed")
    setLoading(false)
    return;
  }
  router.push("/login")

} catch (error) {
  
}
}


  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '32px 16px', boxSizing: 'border-box', background: 'linear-gradient(135deg, #f3f6ff, #eef8f7)', fontFamily: 'Arial, sans-serif' }}>
      <section style={{ width: '100%', maxWidth: 440, padding: 40, boxSizing: 'border-box', borderRadius: 16, backgroundColor: '#fff', boxShadow: '0 18px 50px rgba(31, 45, 61, 0.12)' }}>
        <header style={{ marginBottom: 28 }}>
          <h1 style={{ margin: '0 0 8px', color: '#172033', fontSize: 28 }}>Create your account</h1>
          <p style={{ margin: 0, color: '#667085', fontSize: 14 }}>Enter your details to get started.</p>
        </header>

        <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: 18 }}>
          <label style={labelStyle}>
            Username
            <input name="username" value={form.username} type='text' onChange={handlechange}  autoComplete="username" placeholder="e.g. alexsmith" required style={inputStyle} />
            
      {errors.username && <p className="mt-1.5 text-xs text-red-500">{errors.username}</p>}
          </label>
          <label style={labelStyle}>
            Gender
            <select name="gender" defaultValue="" required style={inputStyle}>
              <option value="" disabled>Select your gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>
          <label style={labelStyle}>
            Email address
            <input name="email" type="email" value={form.email} onChange={handlechange} autoComplete="email" placeholder="you@example.com" required style={inputStyle} />
            
      {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
          </label>
          <label style={labelStyle}>
            Password
            <div className='relative'>
            <input name="password" type={showpassword?"text":"password"} value={form.password} onChange={handlechange} autoComplete="new-password" placeholder="At least 8 characters" minLength={8} required style={inputStyle} />
            <button
                  type="button"
                  onClick={() => setShowpassword((v) => !v)}
                  aria-label={showpassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0B2027]"
                >
                  {showpassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
            </div>
      {errors.password && <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>}
          </label>
          <label style={labelStyle}>
            Confirm password
            <input name="confirmPassword" type={showpassword?"text":"password"} value={confirmpassword} 
            onChange={(e)=>{setConfirmpassword(e.target.value)
              setErrors({...errors,confirmpassword:""})
            }} 
            autoComplete="new-password" placeholder="Re-enter your password" minLength={8} required style={inputStyle} />
            
      {errors.confirmpassword && <p className="mt-1.5 text-xs text-red-500">{errors.confirmpassword}</p>}
          </label>
          <button disabled={loading} className="disabled:opacity-50 disabled:cursor-not-allowed" type="submit" style={{ marginTop: 4, padding: '13px 16px', border: 0, borderRadius: 8, backgroundColor: '#3157d5', color: '#fff', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
            {loading? "Creating an account":"Create account"}
          </button>
        </form>

        <p style={{ margin: '24px 0 0', textAlign: 'center', color: '#667085', fontSize: 14 }}>
          Already have an account?{' '}
          <a href="/login" style={{ color: '#3157d5', fontWeight: 600, textDecoration: 'none' }}>Login</a>
        </p>
      </section>
    </main>
  )
}

const labelStyle = {
  display: 'grid',
  gap: 8,
  color: '#344054',
  fontSize: 14,
  fontWeight: 600,
}

const inputStyle = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '12px 13px',
  border: '1px solid #d0d5dd',
  borderRadius: 8,
  backgroundColor: '#fff',
  color: '#172033',
  fontSize: 14,
  fontWeight: 400,
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