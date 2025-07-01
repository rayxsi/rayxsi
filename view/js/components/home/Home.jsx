import React from 'react';
import "./home.css"
import Logo from '../../../assets/img/logo.png'

function Home(props) {
    return (
        <div className='home-style'>
            <img src={Logo} alt="Rayxsi" />
        </div>
    );
}

export default Home;