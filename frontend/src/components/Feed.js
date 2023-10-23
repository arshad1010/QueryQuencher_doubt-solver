import React, { useEffect } from 'react'
import QuBox from './QuBox'
import "./css/Feed.css";
import Post from './Post';
import axios from 'axios';
import { useState } from 'react';

function Feed() {
  const [Posts, setPosts] =useState([])
  useEffect(()=>{
    axios.get('/api/questions').then((res)=>{
      console.log(res.data.reverse())
      setPosts(res.data)
    }).catch((e)=>{
      console.log(e)
    })
  })
  return (
    <div className="feed">
        <QuBox />
        {
          Posts.map((post,index)=>(<Post key={index} post={post} />))
        }
    </div>
  )
}

export default Feed