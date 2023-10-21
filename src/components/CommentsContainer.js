import React from 'react'
import CommentList from './CommentList'

const commentsData = [
    {
        name:"User1",
        text:"First Comment",
        replies :[],
    },
    {
        name:"User2",
        text:"Second Comment",
        replies :[
            {
                name:"User3",
                text:"Replying to User2",
                replies:[
                    {
                        name:"User4",
                        text:"Replying to User3",
                        replies :[
                            {
                                name:"User5",
                                text:"Replying to User4",
                                replies:[

                                ]
                            }
                        ]
                    },{
                        name:"User6",
                        text:"Replying to User3",
                        replies:[]
                    }
                ]
            }
        ],
    }
]
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 w-[1010px]'>
        <h1 className='text-2xl font-bold'>Comments :</h1>
        <CommentList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer