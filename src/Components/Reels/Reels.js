import React, { useEffect, useState } from 'react'
import '../Reels/reels.css'
import userIcon from '../Icons/user.png'
import singIcon from '../Icons/sing.png'
import likeIcon from '../Icons/like.png'
import sendIcon from '../Icons/send.png'
import installIcon from '../Icons/install.png'
import moreIcon from '../Icons/more.png'
import dotIcon from '../Icons/dot.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import Comment from '../Home/Comment/Comment'


function Reels({ post, setPost, photos, setPhotos }) {
  const [likes, setLikes] = useState({});
  const handleLikeClick = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };


  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        setPost(data);
      });
  }, []);
  return (
    <>
      <div className='reels'>
        {post.map((item, idx) => {
          return (
            <div className="reels__block">
              <div className="reels__video">
                {photos.url}
                <div className="user">
                  <img className='userIcon' src={userIcon} alt="" />
                  <span className='userId'><b>user </b>  <p></p><b>{item.userId}</b></span>
                  <img className='icon' src={dotIcon} alt="" />
                  <span>Падписаться </span>
                </div>
                <div className="comments">
                  <p>...</p>
                </div>
                <div className="song">
                  <img className='singIcon' src={singIcon} alt="" />
                  <span>usersong</span>
                  <img className='icon' src={dotIcon} alt="" />
                  <span>Оригинальная аудио</span>
                </div>
              </div>
              <div className="icons">
                <Link className='icons_icon-like' href="#">
                  <button
                    className={`icons_btn ${likes[item.id] ? 'liked' : ''}`}
                    onClick={() => handleLikeClick(item.id)}
                    disabled={likes[item.id]}
                  >
                    <img src={likeIcon} alt="" />
                  </button>
                   {/* <b>{likes[item.id] || 0} </b> */}
                </Link>
                {/* <div className="coment" onClick={openComment}>
                  <Comment />
                </div> */}
                <Link className='icons_icon' href="#"><img src={sendIcon} alt="icon" /></Link>
                <Link className='icons_icon' href="#"><img src={installIcon} alt="" /></Link>
                <Link className='icons_icon' href="#"><img src={moreIcon} alt="" /></Link>
                <Link className='icons_icon' href="#"><img src={userIcon} alt="icon" /></Link>
              </div>
            </div>
          )
        })}

      </div>
    </>

  )
}

export default Reels
