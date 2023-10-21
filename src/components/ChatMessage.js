import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    
        <div className='flex items-center shadow-sm p-2'>
        <img
        className='h-8' 
        alt='user'
        src='https://logodix.com/logo/1984127.png'
        />

        <span className='font-bold px-3'>{name}</span>
        <span>{message}</span>
        </div>
  
  )
}

export default ChatMessage