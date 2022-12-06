import  React from 'react'
import './profile.css'
import Header from "../header/header"
import Footer from "../footer/footer"
import Item  from '../newfeed/item';
import ListBook from './post.json';

const Profile = () => {
return (
    <div>
        <Header/>
        <div class='pf'>
            <div className='flex'>               
                <div>
                    <img src= {require("../../assets/avata.png") } class='pf_avata'></img>
                </div>
                <div class='pf_pd'>
                    <div class='pf_name'>@congchuabongbong</div>
                    
                    <div class='pf_info'>Tên: Công Chúa Bong Bóng</div>
                    <div class='pf_info'>Ngày sinh: 11/11/2011</div>
                    <div class='pf_info'>Quê quán: Mặt Trăng</div>
                    <div class='pf_info'>Sử thích cá nhân: thích chơi bong bóng</div>
                    
                </div>
            </div>
        </div>
        
        <h1 class='hdtext'>POST</h1>
        <div className='flex flex-wrap mx-10 '>
            {
                ListBook && ListBook.map((value,index)=>{
                    return (
                        <>
                            {
                                <div className='flex flex-col w-1/3 justify-center items-center my-10' key={index}>
                                    <Item value={value}/>
                                </div>
                            } 
                        </>
                    )
                })
            }
        </div>

        <div class='pf_dp'> 
            <button class='nf_btn'>Xem thêm</button>
        </div>
       
        <Footer/>
    </div>
)
}
export default Profile