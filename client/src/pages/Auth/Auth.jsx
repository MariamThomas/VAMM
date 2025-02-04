import React,{useState} from "react";
import './Auth.css'
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom'
import AboutAuth from "./AboutAuth";
import icon from '../../assets/news.png'
import {signup,login} from "../../actions/auth";

const Auth = () =>{
    const [isSignup, setIsSignup]=useState(false)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // const dispatch =useDispatch()
    const navigate=useNavigate()
    const Handleswitch = () => {
        setIsSignup(!isSignup)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!email && !password){
            alert("Enter email and password to continue")
        }
        if(isSignup){
            if(!name){
                alert("Enter a name to continue")
            }
            // dispatch(signup({name,email,password},navigate))
        }else{
            // dispatch(login({email,password},navigate))
        }
        console.log({name,email,password})
    }
    return(
        <section className={'auth-section'}>
            {isSignup && <AboutAuth />}
            <div className={'auth-container'}>
                { !isSignup && <img src={icon} alt={'stack overflow'} className='login-logo' height={150} vspace={0} />}
                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <label htmlFor={'name'}>
                                <h4>Display Name</h4>
                                <input type={'text'} id={'name'} name={'name'} onChange={(e) => setName(e.target.value)}/>
                            </label>
                        )
                    }
                    <label htmlFor={"email"}>
                        <h4>Email</h4>
                        <input type={"email"} name={'email'} id={'email'} onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label htmlFor={"password"}>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <h4> Password</h4>
                            { !isSignup && <p style={{color:"#007ac6",fontSize:"13px"}} > Forgot password?</p> }
                        </div>
                        <input type={"password"} name={'password'} id={'password'} onChange={(e) => setPassword(e.target.value)}/>
                        {isSignup && <p style={{color:"#666767",fontSize:"13px"}}> Password should contain at least 8 <br />characters including 1 <br/> letter and 1 number</p>}
                    </label>
                    {
                        isSignup && (
                            <label htmlFor={'check'}>
                                <input type={'checkbox'} id={'check'}/>
                                <p style={{fontSize:"13px"}}> opt in to receive occasional,
                                    <br /> product updates,user research
                                    invitations,<br />company announcements
                                    , and digests </p>
                            </label>
                        )
                    }
                    <button type={'submit'} className={'auth-btn'} >
                        {isSignup ? 'Signup':'Log in'}
                    </button>
                    {
                        isSignup && (
                            <p style={{color:"#666767",fontSize:"13px"}}>
                                By clicking 'Sign-Up',you agree to our
                                <span style={{color:"#007ac6"}} > terms of <br />service </span>,
                                <span style={{color:"#007ac6"}}>privacy policy </span>and
                                <span style={{color:"#007ac6"}}>cookie policy </span>
                            </p>
                        )
                    }
                </form>
                <p>
                    {isSignup ? 'already have an account?': "Don't have an account?"}
                    <button type={'button'} className={'handle-switch-btn'}
                            onClick={Handleswitch}>
                        { isSignup ? "Login":"Signup"} </button>
                </p>
            </div>
        </section>



    )
}
export default Auth