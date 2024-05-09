export function Button(props){
    return(
        <div>
            <button className='bg-black rounded-md text-white w-full p-2 mt-4 hover:p-3' onClick={props.onClick}>{props.cli}</button>
        </div>
    )
}