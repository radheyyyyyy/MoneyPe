import {Heading} from "../components/Heading.jsx";
import {SubHeading} from "../components/SubHeading.jsx";
import {InputField} from "../components/InputField.jsx";
import {Button} from "../components/Button.jsx";
import {BrowserRouter, Link, Navigate, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function SignUp(){
    const [firstName,setF]=useState("");
    const [lastName,setL]=useState("");
    const [email,sete]=useState("");
    const [pass,setp]=useState("");
    return(
        <div className='bg-gray-200 h-screen w-full flex items-center justify-center'>
            <div className='border-2 border-gray-200 bg-white rounded-lg hover:border-2 hover:border-black px-4 py-1'>
                <div className='m-4'>
                    <Heading title='Sign up'/>
                <SubHeading body='Enter your information to create an account'/>
                <InputField placeholder='Radhey' giveName='First Name' onChange={e=>{
                    setF(e.target.value);
                }}/>
                <InputField placeholder='Shah' giveName='Last Name' onChange={e=>{
                    setL(e.target.value);
                }}/>
                <InputField placeholder='xyz.gmail.com' giveName='Email' onChange={e=>{
                    sete(e.target.value)
                }}/>
                <InputField placeholder='123456' giveName='Password' onChange={e=>{
                    setp(e.target.value)
                }}/>
                <Button cli='Sign up' onClick={async ()=>{
                       const res=await axios.post('http://localhost:5000/v1/api/user/signup',{
                           lastName,
                           firstName,
                           pass,
                           email,
                           balance:4000
                       });
                       localStorage.setItem("token",res.data.token);

                        }
                }/>
                <div className='m-2 flex justify-center items-center'>
                    Already have an account?&nbsp; <Link to="/signin" className='underline font-semibold'>Sign in</Link>
                </div></div>
            </div>
        </div>
    )
}



function Nav({link}){
    const navigate=useNavigate();
    return<div>
        {navigate(link)}
    </div>
}