import React from 'react'
import { Link } from 'react-router-dom';
import likeIcon from '../Icons/like.png'
import '../Notification/notification.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function Notification({ isAdition, setAdition }) {
  const open = () => {
    setAdition(!isAdition);
  };

  const close = () => {
    setAdition(false);
  };

  return (
    <>
      <div
        className={`burger ${isAdition ? "burger-active" : ""}`}
        onClick={open}
      >
        <Link className='navbar-link' >

          <img src={likeIcon} alt="" /> Уведоление</Link>

      </div>
      <div className={`head-links-container ${isAdition ? "change" : ""}`}>
        <div className="head-links">
          <p className='head-user'><b>Уведомаления</b></p>
          <div className="head-message">
            <Link>
              <b>В этом месяце</b>
            </Link>
          </div>
          <Link className='head-link' href="/" onClick={close}>
            <Stack>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
            </Stack>
            <span className='head-link-text'>user</span>
            <button className='follow'>Follow</button>
          </Link>
          <div className="head-two">
            <b>Ранее</b>
            <Link className='head-link' href="/" onClick={close}>
              <Stack>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56 }}
                />
              </Stack>
              <span className='head-link-text'>user</span>
              <button className='follow'>Follow</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


export default Notification

