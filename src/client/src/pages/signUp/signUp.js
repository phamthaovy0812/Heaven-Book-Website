import React,{useEffect, useState} from "react";
import FormSignUp from "./formSignUp";
import BannerSignUp from "./bannerSignUp";
import { createAccount } from '../../api/main';
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [onChange, setOnChange ] = useState({
    firstName:"",
    lastName :"",
    username:"",
    password : "",
    email : ""
  });  
  const [error, showError] = useState({
    noFill : false,
    usernameExist : false ,
    emailExist : false 
  });
  const nav = useNavigate();
  const [ res, setRes ] =useState(null);
  const handleSubmit =()=> {
    if(!onChange.email || !onChange.firstName || !onChange.lastName || !onChange.username || !onChange.password )
      showError({...error,['noFill']: true, ['usernameExist']: false, ['emailExist'] :false })
    else{
      createAccount(onChange,setRes)
    // 
    }
  };

  useEffect(()=>{
  if(res)
  {
      const message = res.data.message; 
      if(message == "Username has been used!")
      {
        showError({...error,['noFill']: false, ['usernameExist']: true, ['emailExist'] :false })
      }
      else if(message=="Email has been used!")
      {
        showError({...error,['noFill']: false, ['usernameExist']: false, ['emailExist'] :true })
      }
      else if(message == "Signup success!")
      {
        nav("/login");
      }
  }
  },[res]);

  return (
    <div class="bg-white flex  ">
        <BannerSignUp/>
        <div class="flex-1 flex flex-col justify-around">
            <h1 class="text-secondary-gray text-5xl font-bold mb-20 ">Đăng ký</h1>
            <FormSignUp onChange={onChange} setOnChange={setOnChange}/>
            <h1 className={ "text-red-600 font-bold mb-4 text-lg" + (( !error.noFill && !error.usernameExist && !error.emailExist)  ? " opacity-0" : "") }>
                      {
                        (error.noFill) && "Vui lòng điền đầy đủ thông tin"
                      }
                      {
                        (error.usernameExist) && "Tài khoản đã tồn tài"
                      }
                      {
                        (error.emailExist) && "Email đã tồn tại"
                      }
            </h1>
            
            <div onClick={handleSubmit} class="bg-primary  text-center w-1/4 mx-auto py-2 rounded-md font-bold text-lg text-white cursor-pointer">
              Đăng kí
            </div>
        </div>
    </div>
  );
};

export default SignUp;
