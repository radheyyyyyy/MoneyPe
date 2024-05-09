import {Heading} from "../components/Heading.jsx";
import {SubHeading} from "../components/SubHeading.jsx";
import {InputField} from "../components/InputField.jsx";
import {Button} from "../components/Button.jsx";
import {Link} from "react-router-dom";

export default function Signin(){
    return (
        <div className='bg-gray-200 h-screen w-full flex items-center justify-center'>
            <div className='border-2 border-gray-200 bg-white rounded-lg hover:border-2 hover:border-black px-4 py-1'>
                <div className='m-4'>
                    <Heading title='Sign in'/>
                    <SubHeading body='Enter your credentials to access your account'/>
                    <InputField placeholder='xyz.gmail.com' giveName='Email'/>
                    <InputField placeholder='123456' giveName='Password'/>
                    <Button cli='Log in'/>
                    <div className='m-2 flex justify-center items-center'>
                        Don't have an account?&nbsp; <Link to="/signup" className='underline font-semibold'>Sign
                        Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}