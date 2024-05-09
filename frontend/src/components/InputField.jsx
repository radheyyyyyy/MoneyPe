export function InputField(props) {
    return (
        <div>
            <label className='font-bold font-sans'>{props.giveName}</label>
            <input className='w-full p-1 mt-1 mb-1 border-gray-200 border-2  rounded-md' type='text'
                   placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    )
}