import  React,{useContext,useEffect, useState} from 'react'
import './profile.css'
import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
import AuthContext  from '../../context/AuthProvider';
import { Link } from "react-router-dom";
import { getAllPost } from '../../api/main';
//import Item  from '../search/postsearch';
import Item from '../newfeed/item'

const Profile = () => {
    const account = useContext( AuthContext);
    console.log(account)

    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        getAllPost(setPosts);
      
    },[])
    


return (
    <div>
        <Header/>
        <div class='pf'>
            <div className='flex'>               
                <div>
                    <img src= {require("../../assets/avata.png") } class='pf_avata'></img>
                </div>
                {
                    account.auth._id &&
                    <div class='pf_pd'>
                    
                    <div class='pf_name'>{account.auth.username}</div>
                    
                    <div class='pf_info'>First Name: {account.auth.firstName}</div>
                    <div class='pf_info'>Last Name: {account.auth.lastName}</div>
                    <div class='pf_info'>Email: {account.auth.email}</div>
                    <Link to ='/editprofile'> <button class='nf_btn mt-6'> Chỉnh sửa thông tin</button></Link>
                    <Link to='/forgotpassword'> <button class='nf_btn mt-6'> Đổi mật khẩu </button></Link>
                   
                </div>

                }
               
            </div>
        </div>
        
        <h1 class='hdtext'>POST</h1>
        <div className='flex flex-wrap mx-10 '>
            {
                posts && posts.filter((value)=>{
                    if(account.auth.username===value.author)
                    {
                        return value;
                    }
                    else{
                        <div className="text-center my-24 font-semibold text-2xl text-primary">Người dùng không có bài post</div>
                    }

                })
                .map((item,index)=>{
                     return (
                         <>
                             {
                                <div key={index}>
                                <Item value={item}/>
                                </div>
                             } 
                         </>
                     )
                 })
            }
        </div>
       
        <Footer/>
    </div>
)
}
export default Profile