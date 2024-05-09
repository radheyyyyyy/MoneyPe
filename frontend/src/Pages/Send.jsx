import {Heading} from "../components/Heading.jsx";
import {InputField} from "../components/InputField.jsx";
import {Button} from "../components/Button.jsx";
import {toto, user2004} from "../components/OtherUsers.jsx";
import axios from "axios";
import {useState} from "react";
import {Link} from "react-router-dom";
export let token=""
export default function Send() {
    const [transfer,set]=useState(0);
    const[to,setTo]=useState(toto);
    const[from,setFrom]=useState("");

    return (
        <div className='bg-gray-200 h-screen w-full flex items-center justify-center'>
            <div className='bg-white rounded-lg w-[30%] px-3 py-7 shadow-xl'>
                <div>

                    <Heading title='Send Money'/>
                    <div className='flex mt-6'>
                        <div
                            className='mt-6 w-10 h-10 mr-2 rounded-full bg-green-500 flex justify-center items-center text-white'>{user2004.charAt(0)}
                        </div>
                        <div className='mt-7 text-lg font-sans font-bold'>{user2004}</div>
                    </div>
                </div>
                <div className='font-semibold text-md p-2'>Amount (in Rs.)</div>
                <InputField placeholder='Enter Amount' onChange={(e)=>{set(parseInt(e.target.value))}} />
                <Link to={"/dashboard"}><button className='bg-green-700 hover:bg-green-500 rounded-md text-white w-full p-2 mt-4 hover:p-3' onClick={ async ()=>{
                    token=localStorage.getItem("token");
                    const res=await axios.post("http://localhost:5000/v1/api/account/transfer",{
                        token,
                        transfer,
                        to
                    })
                    alert(res.data);
                }}>Initiate Transfer</button></Link>
            </div>
        </div>
)
}
