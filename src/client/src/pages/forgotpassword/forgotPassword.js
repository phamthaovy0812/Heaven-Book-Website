import React from 'react';
import FormForgotPassword from "./formForgotPassword";
import BannerForgotPassword from "./bannerForgotPassword";


const ForgotPassword = () => {
    return (
        <div class="bg-slate-100 flex">
            <BannerForgotPassword/>
            <div>
                <h1 class="text-secondary-gray text-3xl font-bold pl-24 mt-24 ml-3.5 mb-10">Chỉnh sửa mật khẩu</h1>
             
                <FormForgotPassword/>
               
                <a href='/login'> <button class="bg-primary mt-10  text-center w-1/4 mb-16 ml-44 py-2 rounded-md font-bold text-lg text-white">Cập nhật</button> </a>
            </div>

        </div>
    );
};

export default ForgotPassword;