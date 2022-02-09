import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom'
import Apps from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import Search from '../Search';

function Home() {
    return <div className='home'>
        <div className="home__header">
            <div className="home__headerLeft">
                <Link to='/about'>About</Link>
                <Link to='/store'>Store</Link>
            </div>
            <div className="home__headerRight">
                <Link to='/gmail'>Gmail</Link>
                <Link to='/images'>Images</Link>
                <Apps/>
                <Avatar/>
            </div>
        </div>

        <div className="home__body">
            <img src="https://www.google.kz/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" alt="" srcset="" />
            <Search hideButtons/>
            </div>

        </div>
}

export default Home;

