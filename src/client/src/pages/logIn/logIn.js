import React,{ useContext } from 'react';
import FormLogIn from "./formLogIn";
import BannerLogIn from "./bannerLogIn";


const Login = () => {
   
   
    return (
        <div class="bg-slate-100 flex">
            <BannerLogIn/>
            <div>
                <h1 class="text-secondary-gray text-3xl font-bold pl-24 mt-24 ml-3.5 mb-10">Đăng nhập</h1>
                <FormLogIn/>
               
            </div>

        </div>
    );
};

export default Login;