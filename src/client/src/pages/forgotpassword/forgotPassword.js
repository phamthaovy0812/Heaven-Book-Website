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
               
              
            </div>

        </div>
    );
};

export default ForgotPassword;