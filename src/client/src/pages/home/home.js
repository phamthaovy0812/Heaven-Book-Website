import React, {useContext} from 'react';
import About from './about';
import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';


const Home = () => {
   
    
    return (
        <div>
            <Header/>
             <img alt="Thumbnail" src={require("../../assets/banner_home.png")} class="w-screen h-96" />
             <About/>
             <Footer/>
        </div>
    );
};

export default Home;