import React from 'react';

const bannerLogIn = () => {
    return (      
            <div class=" h-screen flex-1 bg-orange-600 bg-primary-600 flex flex-col justify-between px-32 ">
                <h1 class="font-bold text-4xl text-white mx-4  text-center mt-6">WELCOME TO</h1>
                <h1 class="font-bold text-3xl text-white mx-4  text-center mt-2 ">- HEAVEN OF BOOKS -</h1>
                <div>
                    <img  src={require("../../assets/bg_log_in.png")} class="m-auto" />
                </div>
                <h4 class="font-pacifico  text-center text-lg italic mb-16" >“Good books, like good friends, are few and chosen; the more select, the more enjoyable.”</h4>
            </div>
    );
};

export default bannerLogIn;