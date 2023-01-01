import  React from 'react'
import './profile.css'
import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
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
                    
                    <div class='pf_info'>First Name:</div>
                    <div class='pf_info'>Last Name:</div>
                    <div class='pf_info'>Email:</div>
                    <a href='/editprofile'> <button class='nf_btn mt-6'> Chỉnh sửa thông tin</button></a>
                    <a href='/forgotpassword'> <button class='nf_btn mt-6'> Đổi mật khẩu </button></a>
                   
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