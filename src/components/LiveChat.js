import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeid } from '../utils/helper';


const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessage = useSelector((store) => store.myChatSlice.messages)
    // console.log(chatMessage);
    const [text , settext ] = useState("")

    const sendMessage = (name , text) => {
        dispatch((addMessage({
            name:name,
            message:text
        })))
    }
    useEffect(()=>{
        const i = setInterval(()=>{
            //Api Polling 
            // console.log("");
            dispatch(addMessage({
                name:generateRandomName(),
                message:makeid(20)
            }))
        },1500)
        return () => clearInterval(i);
    
    }, [])

    return (
        <>
            <div className='ml-[30px] p-4 w-[450px] h-[550px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
            <div> {chatMessage.map((c,i) => (
                    <ChatMessage key={i} name={c.name} message={c.message} />
                    ))}
                </div>
            </div>

        <form className='w-full p-2 ml-[20px] border-black' onSubmit={(e) => {
            e.preventDefault();
            dispatch((addMessage({
                name:"Poojan",
                message:text
            }))
            )
            settext("")
        }}>
            <div className='flex'>
            <input 
            type='text' 
            className='w-[340px] p-2 border border-black rounded-lg' 
            value={text} 
            onChange={(e) => settext(e.target.value)}
            placeholder='Text'
            />
            <button className="px-2 mx-2 w-[100px] bg-green-500">Send</button>
            </div>
        </form>

</>
  )
}

export default LiveChat