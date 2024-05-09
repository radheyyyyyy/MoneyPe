import {Button} from "./Button.jsx";
import axios from "axios";
import {useState} from "react";
import {Link} from "react-router-dom";
export let user2004="";
export let  toto=""
export function OtherUsers({arr}){

    return <div>
        {
            arr.map((e)=>{
                return(
                    <div className='flex justify-between mt-3'>
                        <div className='flex'>
                            <div
                                className='w-10 h-10 mr-4 rounded-full bg-gray-500 font-black flex justify-center items-center text-white'>{e.firstName[0]}
                            </div>
                            <div className='mt-2 mr-3'>{e.firstName}</div>
                        </div>
                        <div>
                            <Link to={"/send"}><Button cli='Send Money' onClick={()=>{user2004=e.firstName; toto=e.email;}}/></Link>
                        </div>

                    </div>
                )
            })
        }
    </div>
}