import React from 'react';
import logo from '../assets/logo.png';
const Title = props => {
    return (
        <div className="title">
            <h1><img className='logo' src={logo}/>PictureBook</h1>
            <h2>Your Pictures</h2>
            <p><i>"A picture is a poem without words."</i></p>
        </div>
    );
}

export default Title;