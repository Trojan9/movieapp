import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import backgroundImage from '../assets/newBackgroundImage.jpeg'



import { GoogleLogin } from '@react-oauth/google';
import logo from '../assets/logo1.png'
import jwt_decode from 'jwt-decode';
import "./Login.css";
import { signIn } from '../utils/api';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [navbool, setNavbool] = useState(false)

    // for navigation
    const navigate=useNavigate()
    useEffect(() => {
    if(navbool){
        navigate('/',{replace:true})
    }
    }, [navbool])
    
        const responseGoogle=async (response)=>{
            // so we need to jwt decode the response comeing
            if(response!=null){
               const decode=jwt_decode(response.credential)
               console.log(decode);
                // store in local storage like shredPreference in flutter
                const {email, sub,picture}=decode
               await signIn(email,sub,setNavbool);
                // localStorage.setItem('user',JSON.stringify(decode));
                // // then we store in our sanity DB
                // const {name, sub,picture}=decode
    
                // // so ow we create a document of user schema like in or db
                // const doc={
                //     _id:sub,
                //     _type:"user",
                //     userName:name,
                //     image:picture
                // }
                // // adds to the clientDB if not exist
                // client.createIfNotExists(doc).then(()=>{
                //     // then we navigate to home screen
                //     navigate('/',{replace:true})
                // }).catch((e)=>
                // {console.log(e)});
            }
        }
  return (
    <div className='login'>
    {/* i.e every component in this div will take full width and full height */}
    <div className='login-innerdiv'>
            <img
                src={backgroundImage}
                 
                // object cover will make video take the whole width and height specified
                 className='login-innerdiv-img'>

             </img>
             {/* this will make the div absolutely placed at the ceter */}
            <div className='login-innerdiv-float'>
                <div >
                    <img src={logo} alt="logo" width="130px" />
                </div>
                <div className="container">
                    <label for="uname"><b>Email</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" value={email} 
            onChange={(e)=>setEmail(e.target.value)} required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        
                    <div className="btn-container">
                        <button type="button" className="btn" onClick={async()=>{
                           await signIn(email,password,setNavbool)
                        }}>
                            Login
                        </button>
                    </div>
      
                    <input type="checkbox"  name="remember" value={remember} onChange={(e)=>setRemember(!remember)} /> Remember me
                    <p>New to Netflix?<a href="/signup" style={{color :'dodgerblue' }}> Sign up now</a>.</p>
      
                </div>
                
                <div >
                    {/* <GoogleOAuthProvider clientId='309210128428-h30clp6oji0v8s87nlf6q85mu4vb6ocg.apps.googleusercontent.com'>

                        <button type='button' className='bg-mainColor flex items-center justify-center p-5'>
                            {/* margin right of 4..so there is a mrgin at the right side */}
                            {/* <FcGoogle className='mr-4'/>
                            Sign In With Google
                        </button>
                    </GoogleOAuthProvider> */}
                    <GoogleLogin
                            onSuccess={credentialResponse => {
                                responseGoogle(credentialResponse);
                                    }}
                            onError={(credentialResponse) => {
                                responseGoogle(credentialResponse);
                                        }}
                    />
                </div>
            </div>
           

    </div>

</div>
  )
}

export default Login