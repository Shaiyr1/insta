import React from 'react'
import likeIcon from '../img/img.png'
import './navigate.css'

function Navigate({ post, setPost }) {
  return (
    <>
      <div className='navigate'>
        <div className="container">
          <div class="row">
            {post.map((item, idx) => {
              return (
                <div class="col s12 m4">
                  <div>
                    
                      <img className='navigate_img' src={likeIcon} alt="icon" />
                    
                  </div>
                </div>
              )
            })}

          </div>
        </div>

      </div>
    </>

  )
}

export default Navigate
