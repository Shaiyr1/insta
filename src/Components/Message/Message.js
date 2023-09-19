import React from 'react'
import writeIcon from '../Icons/write.png'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'
import { Avatar } from '@mui/material'
import './message.css'


function Message() {
  return (
    <div>
      <div className="messages">
        <div className="message-user">
          <Link>
            <h5> <b>User</b></h5>
          </Link> 
          <Link>
            <img src={writeIcon} alt="" />
          </Link>
          
        </div>
        <div className="message-titles">
          <b>Сообщение</b>
          <Link>
            <p>Запросы</p>
          </Link>
        </div>
        <div className="message-avatar">
          <Stack>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Stack>
          <b className='message-avater-text'>User</b>
        </div>
      </div>
    </div>
  )
}

export default Message
