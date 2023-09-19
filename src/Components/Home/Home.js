// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import './home.css'
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import userIcon from '../Icons/user.png'
// import dotIcon from '../Icons/dot.png'
// import moreIcon from '../Icons/more.png'
// import likeIcon from '../Icons/like.png'
// import messageIcon from '../Icons/message.png'
// import sendIcon from '../Icons/send.png'
// import installIcon from '../Icons/install.png'
// import axios from 'axios';

// function Home({ post, setPost, photos, setPhotos, num, setNum }) {
//   const [likes, setLikes] = useState({});

//   useEffect(() => {
//     axios('https://jsonplaceholder.typicode.com/posts')
//       .then(({ data }) => {
//         setPost(data)
//       })
//   })

//   useEffect(() => {
//     axios('https://jsonplaceholder.typicode.com/photos')
//       .then(({ data }) => {
//         setPhotos(data)
//       })
//   })

// //   const handleLikeClick = (itemId) => {
// //     if (!likes[itemId]) {
// //       setLikes({ ...likes, [itemId]: true });
      
     
// // // You can also send a request to update the like count on the server here.
// //     }
// //   };
// const handleLikeClick = (itemId) => {
//   setLikes((prevLikes) => {
//     if (!prevLikes[itemId]) {
//       return { ...prevLikes, [itemId]: true };
//     } else {
//       return prevLikes;
//     }
//   });
// };


//   return (
//     <>
//       <div className='home'>
//         <div className="avatars">
//           <Stack direction="row" spacing={2}>
//             <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//             <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//             <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//           </Stack>
//         </div>
//         {post.map((item, idx) => {
//           return (
//             <>

//               <div className="content">
//                 <div className="content__block">
//                   <div className="user">
//                     <img className='userIcon' src={userIcon} alt="" />
//                     <span className='userTitle'>user <p></p> {item.userId}</span>
//                     <img className='icon' src={dotIcon} alt="" />
//                     <span>Падписаться </span>
//                     <img className='user_more' src={moreIcon} alt="" />
//                   </div>
//                   <div className="content__video">
//                     {photos.url}
//                   </div>
//                   <div className="content_icons">
//                     <div className="icons_thee">
//                       <Link>
//                         {/* <button
//                           className={`icons_btn ${num === 1 ? 'liked' : ''}`}
//                           onClick={(id) => {
//                             if (num !== 1) {
//                               setNum(num + 1);
//                             }
//                           }}
//                           disabled={num === 1}
//                         >
//                           <img src={likeIcon} alt="" />
//                         </button> */}
//                    <button
//                       className={`icons_btn ${likes[item.id] ? 'liked' : ''}`}
//                       onClick={() => handleLikeClick(item.id)}
//                       disabled={likes[item.id]}
//                     >
//                       <img src={likeIcon} alt="" />
//                     </button>
//                       </Link>
//                       <Link ><img src={messageIcon} alt="" /></Link>
//                       <Link ><img src={sendIcon} alt="" /></Link>
//                     </div>
//                     <Link ><img className='icons_img' src={installIcon} alt="" /></Link>
//                   </div>
//                   <div className="likes">
//                     <p><b>{likes[item.id] ? item.likes + 1 : item.likes} отметок "Нравится"</b></p>
//                   </div>
//                   <div className="user_link">
//                     <Link >
//                       <b>
//                         User {item.userId}
//                       </b>
//                     </Link>
//                     <span className='user_comm'>asdfasdf....</span>
//                   </div>
//                   <div className="comments">
//                     <Link className='comments_link' href="#"><>Посмотреть комментарии</></Link>
//                     <input type="text" placeholder='Добавьте комментарий...' />
//                   </div>
//                 </div>
//               </div>
//             </>
//           )
//         })}

//       </div>
//     </>

//   )
// }

// export default Home

import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import './home.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import userIcon from '../Icons/user.png';
import dotIcon from '../Icons/dot.png';
import moreIcon from '../Icons/more.png';
import likeIcon from '../Icons/like.png';
// import messageIcon from '../Icons/message.png';
import sendIcon from '../Icons/send.png';
import installIcon from '../Icons/install.png';
import axios from 'axios';
import Comment from './Comment/Comment';

function Home() {
  const [post, setPost] = useState([]);
  const [likes, setLikes] = useState({});
  const [comment, setComment] = useState([])
  const [commActive, setCommActive] = useState(false)
  const openComment = () => {
    setCommActive(!commActive);
};

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        setPost(data);
      });
  }, []); 

  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(({data})=>{
        setComment(data)
      })
  }, [])

  const handleLikeClick = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };


  return (
    <div className='home'>
      <div className="avatars">
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Stack>
      </div>
      {post.map((item) => (
        <div key={item.id} className="content">
          <div className="content__block">
            <div className="user">
              <img className='userIcon' src={userIcon} alt="" />
              <span className='userTitle'>user <p></p> {item.userId}</span>
              <img className='icon' src={dotIcon} alt="" />
              <span>Подписаться </span>
              <img className='user_more' src={moreIcon} alt="" />
            </div>
            <div className="content__video">
            </div>
            <div className="content_icons">
              <div className="icons_thee">
                <Link>
                  <button
                    className={`icons_btn ${likes[item.id] ? 'liked' : ''}`}
                    onClick={() => handleLikeClick(item.id)}
                    disabled={likes[item.id]}
                  >
                    <img src={likeIcon} alt="" />
                  </button>
                </Link>
                <div className="coment" onClick={openComment}>
                  <Comment comment={comment} setComment={setComment} commActive={commActive} setCommActive={setCommActive} postId={item.id} />
                </div>
                
                <Link ><img src={sendIcon} alt="" /></Link>
              </div>
              <Link ><img className='icons_img' src={installIcon} alt="" /></Link>
            </div>
            <div className="likes">
            <p><b>{likes[item.id] || 0} отметок "Нравится"</b></p>
            </div>
            <div className="user_link">
              <Link >
                <b>
                  User {item.userId}
                </b>
              </Link>
              <span className='user_comm'>asdfasdf....</span>
            </div>
            <div className="comments">
              <Link className='comments_link' href="#"><>Посмотреть комментарии</></Link>
              <input type="text" placeholder='Добавьте комментарий...' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
