import {InputField} from "./InputField.jsx";
import {useState} from "react";
export function Appbar(){
    return(
        <div>
            <div className='flex justify-between border-b-2 border-gray-200 py-3'>
                <div className='font-bold ml-4 mt-2'>MoneyPe</div>
                <div className='flex'>
                    <div className='mt-2 mr-3'>Hello User</div>
                    <div
                        className='w-10 h-10 mr-4 rounded-full bg-gray-500 font-black flex justify-center items-center text-white'>U
                    </div>
                </div>
            </div>
        </div>
    )
}