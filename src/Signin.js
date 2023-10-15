import React, { useEffect, useState } from 'react';
//import GoogleButton from 'react-google-button';
//import { UserAuth } from './Context/AuthContext';
import {auth,provider} from './firebase';
import { signInWithPopup } from 'firebase/auth';
import Weather from './Weather';
 function Signin() {
   // const {googleSignIn} = UserAuth();
   // const handleGoogleSignIn = async()=>{
     //   try{
       //     await handleGoogleSignIn()
       // } catch(error){
         //   console.log(error)
        //}
        const [value,setValue] = useState('');
        const handleClick =()=>{
            signInWithPopup(auth,provider).then((data)=>{
setValue(data.user.email)
setValue(data.user.displayName)
localStorage.setItem("email",data.user.email)
localStorage.setItem('name',data.user.displayName)
            })
        }
        useEffect(()=>{
            setValue(localStorage.getItem('email'))
            setValue(localStorage.getItem('name'))
        })
        
    
  return (
  
    <div className='sign_in'>
        <h1>Welcome to WeatherApp</h1>
        
        {value?<Weather/>:
                <button onClick={handleClick} className='btn btn-primary' id='google_btn'>
<img className='google_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="not-found" width="35px" height="38px"/>       Sign in With Google</button>


  }

    </div>

  )
  }
export default Signin;