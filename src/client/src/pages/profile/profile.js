import  React,{useContext} from 'react'
import './profile.css'
import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
import Item  from '../newfeed/item';
//import ListBook from './post.json';
import AuthContext  from '../../context/AuthProvider';
import { Link } from "react-router-dom";

const Profile = () => {
    const account = useContext( AuthContext);
    console.log(account)
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
                // ListBook && ListBook.map((value,index)=>{
                //     return (
                //         <>
                //             {
                //                 <div className='flex flex-col w-1/3 justify-center items-center my-10' key={index}>
                //                     <Item value={value}/>
                //                 </div>
                //             } 
                //         </>
                //     )
                // })
            }
        </div>
       
        <Footer/>
    </div>
)
}
export default Profile