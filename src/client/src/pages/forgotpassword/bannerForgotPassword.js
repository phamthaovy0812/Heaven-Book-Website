import React from 'react';

const ForgotPassword = () => {
    return (      
            <div class=" h-screen flex-1 bg-orange-600 bg-primary-600 flex flex-col justify-between px-40 ">
                <h1 class="font-bold text-4xl text-white mx-4  text-center mt-6">WELCOME TO</h1>
                <h1 class="font-bold text-3xl text-white mx-4  text-center mt-2 ">- HEAVEN OF BOOKS -</h1>
                <div>
                    <img  src={require("../../assets/forgotPassword.png")} class="m-2 p-2" />
                </div>
            </div>
    );
};

export default ForgotPassword;