import React from 'react';
import FormLogIn from "./formLogIn";
import BannerLogIn from "./bannerLogIn";


const logIn = () => {
    return (
        <div class="bg-slate-100 flex">
            <BannerLogIn/>
            <div>
                <h1 class="text-secondary-gray text-3xl font-bold pl-24 mt-24 ml-3.5 mb-10">Đăng nhập</h1>
             
                <FormLogIn/>
               
                <a href='/home'> <button class="bg-primary mt-10  text-center w-1/4 mb-16 ml-44 py-2 rounded-md font-bold text-lg text-white">Đăng nhập</button> </a>
            </div>

        </div>
    );
};

export default logIn;