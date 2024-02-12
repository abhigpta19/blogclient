import React, { useState } from 'react'
// import { DUMMY_POSTS } from '../data'
import PostItem from '../components/PostItem'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CatagoryPosts = () => {
  const [Posts, setpost] = useState ([])
  const location = useLocation();
  const pathname = location.pathname;
  
  const cat = pathname.substring(17);
    const handleUpload = async () => {
        
        try {
          const response = await axios.get(`https://server-in-blog.onrender.com/getAllDataByCategory/${cat}`);
        //   console.log(response.data.data[0].imgname);
        //   setpost(response.data.data)
        //   console.log(Posts)
            for(var i=0; i<response.data.data.length; i++)
            {
                const resp = await axios.get(`https://server-in-blog.onrender.com/getImage/${response.data.data[i].imgname}`)
                
                // console.log(resp.data.imageData)
                response.data.data[i].thumbnail = resp.data.imageData
                // console.log(response.data.data[i])
                // Posts.append(response.data.data[i]);
            }
            setpost(response.data.data)
        } catch (error) {
          console.error('Error fetching image', error);
        }
    }
    handleUpload();
    return (

        <section className='posts'>
        {
           Posts.length > 0 ? <div className='container posts__container'>
                {
                Posts.map(({id, thumbnail, category, title}) => 
                <PostItem postID={id} thumbnail={thumbnail} category={category} title={title}
                />)
                }
            </div> : <h2 className='center'>NO POSTS FOUND..... </h2>}
        </section>
    ) 
}

export default CatagoryPosts