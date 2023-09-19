// import React from 'react'
// import { Link } from 'react-router-dom'
// import messageIcon from '../Comment/message.png'
// import './comment.css'
// import userIcon from './user.png'

// function Comment({ comment, setComment, commActive, setCommActive }) {
//     const openComment = () => {
//         setCommActive(!commActive);
//     };
//     return (
//         <>
//             <div className="comment">
//                 <div className={`CommBur ${commActive ? "CommBur-active" : ""}`}
//                     onClick={openComment}>
//                     <Link ><img src={messageIcon} alt="" /></Link>
//                 </div>
//                 <div className="conteiner">
//                  <div className={`comment__infor ${commActive ? "CommChange" : ""}`}>

//                     {comment.map((item, idx) => {
//                         return (
//                             <div className='comment-block' key={idx}>

//                                 <Link className='comment-user'>
//                                 <img src={userIcon} alt="" />
//                                     <h6><b>{item.email}:</b></h6>
//                                 </Link> 
//                                 <span className='user-comment'>{item.name}</span>
//                             </div>
//                         )
//                     })}
//                 </div>                   
//                 </div>



//             </div>

//         </>

//     )
// }

// export default Comment

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import messageIcon from '../Comment/message.png';
import './comment.css';
import userIcon from './user.png';

function Comment({ comment, setComment, postId }) {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  // Фильтруйте комментарии по postId, только если showComments равно true
  const filteredComments = showComments ? comment.filter((item) => item.postId === postId) : [];

  return (
    <>
      <div className="comment">
        <div className="comment__button">
          <Link onClick={toggleComments}>
            <img src={messageIcon} alt="" />
          </Link>
        </div>
        <div className="comment__container">
          <div className={`comment__info ${showComments ? 'CommChange' : ''}`}>
            {filteredComments.map((item, idx) => {
              return (
                <div className="comment-block" key={idx}>
                  <Link className="comment-user">
                    <img src={userIcon} alt="" />
                    <h6><b>{item.email}:</b></h6>
                  </Link>
                  <span className="user-comment">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
