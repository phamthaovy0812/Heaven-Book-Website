import React from 'react';
import About from './about';
const home = () => {
    return (
        <div>
             <img alt="Thumbnail" src={require("../../assets/banner_home.png")} class="w-screen h-96" />
             <About/>
        </div>
    );
};

export default home;