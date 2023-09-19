import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Tabs from '../User/Tabs'
import '../User/user.css'

function User() {
  const [toggleState, setToggleState] = useState(1);

  return (
    <div className='avatar'>
      <div className="avatar__head">
        <Stack>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 156, height: 156 }}
          />
        </Stack>
        <div className="information">
          <Link>
            <b>user</b>
          </Link>
          <div className="information__text">
            <p><b>0</b> публикаций</p>
            <p><b>0</b> подписчиков</p>
            <p><b>0</b> подписок</p>
          </div>
        </div>
      </div>

      <div className="topical">
        <div className="topical_block">
          <Link className='topical_link'> 
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <p className='topical_text'>Добавить</p>
          </Link>

        </div>

      </div>
      <Tabs toggleState={toggleState} setToggleState={setToggleState}/>
    </div>
  )
}

export default User
