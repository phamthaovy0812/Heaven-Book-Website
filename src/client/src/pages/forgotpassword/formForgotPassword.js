import React, { useState, useContext } from 'react';
// import { object, string, TypeOf } from "zod";
// import {changePassAccount} from '../../api/main';
// import { useEffect } from "react";

import AuthContext  from '../../context/AuthProvider';
 import { Link, useNavigate, useParams } from "react-router-dom";
import { changePassAccount } from '../../api/account';


const FormResetPassword = () => {
   
    const account = useContext( AuthContext);
   
    const nav = useNavigate();
    const [ textInput, setTexInput ] = useState({
        _id: account.auth._id,
        username:account.auth.username,
        password :"",
        newpass :"",
      
    });

const handleChangeText =( evt )=>{
    evt.preventDefault();
    setTexInput({...textInput,[ evt.target.name ] : evt.target.value } )
}
const handleResetPass =(event)=>{
    console.log("---",account.auth.password, textInput);
    if (account.auth.password!==textInput.password){
        console.log("err");
    }
    event.preventDefault();
    changePassAccount(textInput);  
    nav("/profile");
}
     
    return (
        <form class=" px-28 ">
            <div >
                <div>
                    <label for="password" class="text-secondary-gray text-lg font-semibold ">Mật khẩu cũ</label>
                    <input type="password" name="password" class="bg-amber-50 py-2 w-full mt-1"  onChange={e=>handleChangeText(e)}></input>
                    
                </div>
                <div>
                    <label for="password" class="text-secondary-gray text-lg font-semibold ">Mật khẩu mới</label>
                    <input type="password" name="newpass" class="bg-amber-50 py-2 w-full mt-1"   onChange={e=>handleChangeText(e)}></input>
                 
                </div>
                <div>
                    <label for="password" class="text-secondary-gray text-lg font-semibold ">Xác nhận lại mật khẩu</label>
                    <input type="password" name="confirmpass" class="bg-amber-50 py-2 w-full mt-1"></input>
                 
                </div> 
              
                
                <button class="bg-primary mt-10  text-center w-1/4 mb-16 ml-44 py-2 rounded-md font-bold text-lg text-white" onClick={(event)=>handleResetPass(event)}>Cập nhật</button>
             
            </div>  
        </form>
        
    );
};

export default FormResetPassword;