import  React, {useContext} from 'react'
import './header.css'
import AuthContext  from '../../context/AuthProvider';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const account = useContext( AuthContext);
    const nav = useNavigate();
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
                            <Link to="/">HOME</Link>
                        </li>
                        <li className='itemBar' class='hd_li'>
                            <Link to="/newfeed">NEWFEED</Link>
                        </li>
                        <li className='itemBar' class='hd_li'>
                            <Link to="/post">POST</Link>
                        </li>
                        <li className='itemBar' class='hd_li'>
                            <Link to="/ranking">RANKING</Link>
                           
                        </li>
                        <li className='itemBar' class='hd_li'>
                            <Link to="/search">SEARCH</Link>
                        </li>
                        {
                            account.auth.isAdmin && <li className='itemBar' class='hd_li'>
                                <Link to="/censor">CENSOR</Link>
                            </li>
                        }
                        <li className='itemBar' class='hd_li'>
                            <Link to="/profile">PROFILE</Link>
                        </li>
                        
                    </ul>
                </div>
                {
                    !account.auth._id &&
                    <div>
                        <button className='btntoLogin' class='hd_btn'><a href='/login'>Đăng nhập</a>/<a href='signup'>Đăng ký</a></button>
                    </div>
                }
                {
                    account.auth._id &&
                    <button 
                        onClick={()=>{nav("/profile");}}
                        className='flex items-center'
                    >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10C18.7639 10 17.5555 10.3666 16.5277 11.0533C15.4999 11.7401 14.6988 12.7162 14.2258 13.8582C13.7527 15.0003 13.6289 16.2569 13.8701 17.4693C14.1113 18.6817 14.7065 19.7953 15.5806 20.6694C16.4547 21.5435 17.5683 22.1388 18.7807 22.3799C19.9931 22.6211 21.2497 22.4973 22.3918 22.0242C23.5338 21.5512 24.5099 20.7501 25.1967 19.7223C25.8834 18.6945 26.25 17.4861 26.25 16.25C26.25 14.5924 25.5915 13.0027 24.4194 11.8306C23.2473 10.6585 21.6576 10 20 10Z" fill="black"/>
                        <path d="M20 2.5C16.5388 2.5 13.1554 3.52636 10.2775 5.44928C7.39967 7.37221 5.15665 10.1053 3.83212 13.303C2.50758 16.5007 2.16102 20.0194 2.83627 23.4141C3.51151 26.8087 5.17822 29.9269 7.62564 32.3744C10.0731 34.8218 13.1913 36.4885 16.5859 37.1637C19.9806 37.839 23.4993 37.4924 26.697 36.1679C29.8947 34.8434 32.6278 32.6003 34.5507 29.7225C36.4737 26.8446 37.5 23.4612 37.5 20C37.4947 15.3603 35.6493 10.9122 32.3685 7.63148C29.0878 4.35074 24.6397 2.50529 20 2.5V2.5ZM29.99 31.1575C29.9651 29.5179 29.2971 27.9537 28.1299 26.802C26.9627 25.6502 25.3898 25.0031 23.75 25H16.25C14.6102 25.0031 13.0373 25.6502 11.8701 26.802C10.7029 27.9537 10.0349 29.5179 10.01 31.1575C7.74321 29.1334 6.14467 26.4686 5.42605 23.5158C4.70743 20.5631 4.90263 17.4617 5.98581 14.6223C7.06898 11.783 8.98903 9.33958 11.4917 7.61571C13.9944 5.89183 16.9617 4.96878 20.0006 4.96878C23.0396 4.96878 26.0069 5.89183 28.5095 7.61571C31.0122 9.33958 32.9323 11.783 34.0155 14.6223C35.0986 17.4617 35.2938 20.5631 34.5752 23.5158C33.8566 26.4686 32.2581 29.1334 29.9913 31.1575H29.99Z" fill="black"/>
                        </svg>
                        <h1 className='px-4'>{account.auth.lastName} {account.auth.firstName}</h1>
                        
                    </button>
                }
            
            </header>
        
            < div className='headerImg' >     
                <img class='hd_img' src={require("../../assets/banner_ranking.png") }></img>
                    
            </div>

        </section>
    )
}
export default Header