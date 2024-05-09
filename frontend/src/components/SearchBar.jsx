import {InputField} from "./InputField.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {OtherUsers} from "./OtherUsers.jsx";

export function SearchBar(){
    const [f,set]=useState("R");
    const [arr,setA]=useState([]);
    useEffect(() => {
         axios.get('http://localhost:5000/v1/api/user/bulk?f='+f).then((res)=>{
             setA(res.data);
         })

    }, [f]);
    {if(f==="") {set("R")}}
    return (
        <div>
            <div className='font-bold p-8'>
                <div>Your Balance: Rs.10,000</div>
                <div className='pt-6'>
                    Users
                </div>
                <div>
                    <InputField placeholder='Search Users...' onChange={async (e)=>{
                        set(e.target.value);
                    }}/>
                </div>
                <div>
                    <OtherUsers arr={arr}/>
                </div>
            </div>
        </div>
    )
}