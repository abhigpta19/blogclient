import React, { useEffect, useState } from 'react'
import PostAuthor from '../components/PostAuthor'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Postdetails = () => {

const [title, setTitle]= useState('')
const [category, setCategory]= useState('Uncategorized')
const [ description, setDescription] = useState('')
const [file, setFile] = useState(null);
const location = useLocation();
const pathname = location.pathname;
const id = pathname.substring(7);

const [clicked, setClicked] = useState(null); // Track user choice

  const handleLikeClick = async (isLiked) => {
    setClicked(true);
      try {
        const key = id + "like";
        if(localStorage.getItem(key)==null)
          {
            localStorage.setItem(key,1);
          }
          else
          {
            return;
          }
        const respo = await fetch(`https://server-in-blog.onrender.com/likesCount/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            isLiked: isLiked
          })
        });
  
      } catch (error) {
        console.log("it is not working for some issue");
        console.error('Error making API call:', error.message);
      }
  };


useEffect(() => {
  const handleUpload = async () => {
    try {  
      console.log(id);
      const response = await axios.get(`https://server-in-blog.onrender.com/getAllDataById/${id}`);
      console.log("the checkpont 3");
      console.log(response);
      setTitle(response.data.data.title);
      setCategory(response.data.data.category);
      setDescription(response.data.data.description);
      const resp = await axios.get(`https://server-in-blog.onrender.com/getImage/${response.data.data.imgname}`);
      setFile(resp.data.imageData);
      // return post;

      // setPosts(updatedPosts);
    } catch (error) {
      console.error('Error fetching image', error);
    }
  };

  handleUpload();
}, []); // Include id as a dependency to re-run the effect when it changes

  return (
    <>
    <div className='post-details__thumbnail'>
          <img src={file} alt='' />
        </div>
    <section className='post-detail' style={{margin: "0rem"}}>
      <div className='container post-details__container'>
        {/* <h1>This is the post of title!</h1> */}
        {/* <div className='post-details__heder'> */}
        {/* <PostAuthor/> */}
        {/* <div className='post-detail__buttons'> */}
        {/* <Link to={'/post/werwer/edit'} className='btn sm primary' >Edit post</Link> */}
        {/* <Link Link to={'/post/werwer/delete'} className='btn sm primary' >Delete Post</Link> */}
        {/* </div> */}
        {/* </div> */}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , width : '100%' }}>
          {/* <h1>This is the post titjdfklasdjfklsjadfl c fsdjf sjdfhsjf adsf asdf asf sad fsadf adsf sadf asdf sad f sadf sad fsd fsda f   dfh sajfh ksdfh sajfhsadf le!</h1> */}
          {/* <div className='post-details__header'> */}
          <h1>{title}</h1>
          <div className='post-details__header' style={{ whiteSpace: 'nowrap', marginLeft: '10px' }}>
            <PostAuthor />
            {/* Other content in post-details__header */}
          </div>
        </div>


        
        <div className='description' dangerouslySetInnerHTML={{ __html: description }} />
        {clicked? null: (<div className="like-form">
          <h4>Did you like the blog?</h4>
          <button onClick={() => handleLikeClick(true)}>Yes</button>
          <button onClick={() => handleLikeClick(false)}>No</button>
        </div>)}
      </div>
    </section>
    </>
  )
}

export default Postdetails