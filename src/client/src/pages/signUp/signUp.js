import React,{useState} from "react";
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

const nav = useNavigate();

const handleSubmit =()=> {
  createAccount(onChange)
  nav("/login");
};

  return (
    <div class="bg-white flex  ">
        <BannerSignUp/>
        <div class="flex-1 flex flex-col justify-around">
            <h1 class="text-secondary-gray text-5xl font-bold mb-20 ">Đăng ký</h1>
            <FormSignUp onChange={onChange} setOnChange={setOnChange}/>
          
            <div onClick={handleSubmit} class="bg-primary  text-center w-1/4 mx-auto py-2 rounded-md font-bold text-lg text-white cursor-pointer">
              Đăng kí
            </div>
        </div>
    </div>
  );
};

export default SignUp;
