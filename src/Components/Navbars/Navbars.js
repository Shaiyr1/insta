import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import '../Navbars/navbars.css';
import homeIcon from '../Icons/home.png';
// import searchIcon from '../Icons/search.png'
import navigateIcon from '../Icons/navigate.png'
import reelsIcon from '../Icons/reels.png'
import messageIcon from '../Icons/message.png'
// import likeIcon from '../Icons/like.png'
import createIcon from '../Icons/create.png'
import userIcon from '../Icons/user.png'

import Home from '../Home/Home';
import Search from '../Searsh/Search';
import Navigate from '../Navigate/Navigate';
import Reels from '../Reels/Reels';
import Message from '../Message/Message';
import Notification from '../Notification/Notification';
import Create from '../Create/Create';
import User from '../User/User';
// import More from './Burgers/More';
import '../Navbars/Burgers/more.css'
import More from './Burgers/More';




function Navbars() {
  const [post, setPost] = useState([])
  const [photos, setPhotos] = useState([])
  const [num, setNum] = useState(0)

  const [isActive, setActive] = useState(false);
  const openHam = () => {
    setActive(!isActive);
  };
  

  const [isAdition, setAdition] = useState(false);
  const open = () => {
    setAdition(!isAdition);
  }

  const [change, setChange] = useState(false);
  const openChange = () =>{
    setChange(!change);
  }


  return (
    <div className="nav">
      <div className='navbars'>
        <ul>
          <li className='navbars__title'><Link to='/'>Instagram</Link></li>
        </ul>
        <ul className='navbars__ul'>
          <li className='navbars__li'><Link className='navbars-link' to='/'><img src={homeIcon} alt="icon" /> Главная</Link></li>
          <li className='navbars__li' onClick={openChange}><Search change={change} setChange={setChange}/></li>
          <li className='navbars__li'><Link className='navbars-link' to='/navigate'><img src={navigateIcon} alt="icon" /> Интересное</Link></li>
          <li className='navbars__li'><Link className='navbars-link' to='/reels'><img src={reelsIcon} alt="icon" /> Reels</Link></li>
          <li className='navbars__li'><Link className='navbars-link message' to='/message'><img src={messageIcon} alt="icon" /> Сообщение</Link></li>
          <li className='navbars__li' onClick={open}><Notification isAdition={isAdition} setAdition={setAdition}/></li>
          <li className='navbars__li'><Link className='navbars-link' to='/create'><img src={createIcon} alt="" /> Создать</Link></li>
          <li className='navbars__li'><Link className='navbars-link' to='/user'><img src={userIcon} alt="icon" /> Профиль</Link></li>
        </ul>

        <div className="more" onClick={openHam}>
          <More isActive={isActive} setActive={setActive}/>
         
        </div>
      </div>


      <Routes>
        <Route path='/' element={<Home post={post} setPost={setPost}
          photos={photos} setPhotos={setPhotos}
          num={num} setNum={setNum}
        />} />
        <Route path='/search' element={<Search />} />
        <Route path='/navigate' element={<Navigate post={post} setPost={setPost}/>} />
        <Route path='/reels' element={<Reels post={post} setPost={setPost} photos={photos} setPhotos={setPhotos}/>} />
        <Route path='/message' element={<Message />} />
        {/* <Route path='/notification' element={<Notification isActive={isActive} setActive={setActive}/>} onClick={openHam}/> */}
        <Route path='/create' element={<Create/>} />
        <Route path='/user' element={<User />} />
        {/* <Route path='/more' element={<More isActive={isActive} setActive={setActive}/>} /> */}

      </Routes>




    </div>

  )
}

export default Navbars
