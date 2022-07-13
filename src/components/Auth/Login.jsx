import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {addUser,login} from './../../redux/action';
import '../../App.css'
function Login() {
	const dispatch=useDispatch()
	const navigate = useNavigate()
	const [show,setShow]= useState(false)
	const [firstname,setFirstName]=useState('')
	const [lastname,setLastName]=useState('')
	const [email,setEmail]=useState('')
	const [password,setPassword]=useState('')

	const submitHandler=(e)=>{
		e.preventDefault()
		dispatch(addUser({firstname,lastname,email,password},navigate))
	}
	const submitLogin=(e)=>{
		e.preventDefault()
		dispatch(login({email,password},navigate))
		console.log(email,password)
	}
  return (
    <div>
       
<div className={show? "container right-panel-active " : "container"}id="container">
	<div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="First Name" onChange={(e)=> setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" onChange={(e)=> setLastName(e.target.value)}  />
            <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}  />
            <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}  />
            <button onClick={(e)=>submitHandler(e)}>Sign Up</button>
        
		</form>
	</div>
	<div className={show?"form-container sign-in-container":"form-container sign-in-container right-panel-active"}>
		<form action="#">
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
			<input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
			<a href="#">Forgot your password?</a>
			<button onClick={(e)=>submitLogin(e)} >Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button onClick={()=>setShow(!show)}className="ghost" id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button onClick={()=>setShow(!show)} className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

<footer>
	
</footer>
    </div>
  )
}

export default Login