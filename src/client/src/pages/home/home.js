import React, {useContext} from 'react';
import About from './about';
import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';


const Home = () => {
   
    
    return (
        <div>
            <Header/>
             <About/>
             <Footer/>
        </div>
    );
};

export default Home;