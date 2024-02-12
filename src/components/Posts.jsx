import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import axios from 'axios';

const Posts = () => {
    const [Posts, setpost] = useState ([])
    useEffect(() => {
    const handleUpload = async () => {
        
        try {
            console.log("let me help you ");
          const response = await axios.get('https://server-in-blog.onrender.com/getAllData');
          console.log("came after api request lets see it now");
        //   console.log(response.data.data[0].imgname);
        //   setpost(response.data.data)
        //   console.log(Posts)
        console.log(response.data);
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
            //window.location.reload();
           console.error('Error fetching image', error);
        }
    }
    
    handleUpload();
}, []);

    return ( 

        <section className='posts'>
        {
           Posts.length > 0 ? <>
           <h4 style={{marginTop:"10px", marginBottom:"5px", padding: "2rem"}}>Featured Acticles</h4>
           <div className='container posts__container'>
                {
                Posts.map(({id, thumbnail, category, title}) => 
                <PostItem postID={id} thumbnail={thumbnail} category={category} title={title}
                />)
                }
            </div>
            </> : <h2 className='center'>NO POSTS FOUND..... </h2>}
        </section>
    ) 
}

export default Posts