import React from 'react'
import './Home.css';
import Login from './Login';
import Description from './Description';
import Logo from './Logo';


const Home = () => {
    return (
        <>
            <Description />
            <Login />
            <Logo />
            <div className='Home' />
        </>
    )
}

export default Home