import React from 'react'
import { Link } from 'react-router-dom';
import '../User/user.css'
import cameraIcon from '../Icons/camera.png';

function Tabs({ toggleState, setToggleState }) {

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div>
            <div className="tabs_con">
                <div className="container">
                    <div className="block-tabs">
                        <div
                            className={toggleState === 1 ?
                                "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >Публикации</div>
                        <div
                            className={toggleState === 2 ?
                                "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >Сохраненное</div>
                        <div
                            className={toggleState === 3 ?
                                "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >Отметки</div>
                    </div>

                    <div className="contents-tabs">

                        <div
                            className={toggleState === 1 ?
                                "contents active-contents" : "contents"}
                        >
                            <img className='contents_icon' src={cameraIcon} alt="" />
                            <h2>Поделиться фото</h2>
                            
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo esse molestias numquam odio quae. </p> 
                            <Link className='contents-link' to='/create'>Поделитесь</Link>
                        </div>

                        <div
                            className={toggleState === 2 ?
                                "contents active-contents" : "contents"}
                        >
                            <h2>Все публикации</h2>
                            
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo esse molestias numquam odio quae. Iure porro labore a laboriosam voluptatum distinctio sint, placeat maiores ut laborum dignissimos, corrupti natus.</p>
                        </div>

                        <div
                            className={toggleState === 3 ?
                                "contents active-contents" : "contents"}
                        >
                            <img className='contents_icon' src={cameraIcon} alt="" />
                            <h2>Фото с вами</h2>
                            
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Tabs
