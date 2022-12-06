import  React from 'react'
import './header.css'


const Header = () => {
return (
    <section>
        <header class='header'>
            < div className='logo' class='flex'>              
                <img class="logo" src={require("../../assets/logo.png") }></img>
                <h1>Heaven Of Books</h1>              
            </div>

            <div className='Bar' >
                <ul className='listBar' class='menu'>
                    <li className='itemBar' class='hd_li'>
                        <a href="#" >HOME</a>
                    </li>
                    <li className='itemBar' class='hd_li'>
                        <a href="#" >NEWFEED</a>
                    </li>
                    <li className='itemBar' class='hd_li'>
                        <a href="#" >POST</a>
                    </li>
                    <li className='itemBar' class='hd_li'>
                        <a href="#" >RANKING</a>
                    </li>
                    <li className='itemBar' class='hd_li'>
                        <a href="#" >SEARCH</a>
                    </li>
                    <li className='itemBar' class='hd_li'>
                        <a href="#" >PROFILE</a>
                    </li>
                    
                </ul>
            </div>
            <div>
                <button className='btntoLogin' class='hd_btn'>Đăng nhập/Đăng ký</button>
            </div>
        
           
        </header>
     
        < div className='headerImg' >     
            <img class='hd_img' src={require("../../assets/banner_ranking.png") }></img>
                
        </div>

    </section>
)
}
export default Header