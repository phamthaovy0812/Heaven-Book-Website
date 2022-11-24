import React from "react";
import FormSignUp from "./formSignUp";
import BannerSignUp from "./bannerSignUp";
import Button from "../../components/button";

const signUp = () => {
  return (
    <div class="bg-white flex  ">
        <BannerSignUp/>
        <div class="flex-1 flex flex-col justify-around">
            <h1 class="text-secondary-gray text-3xl font-bold pl-24">Đăng nhập</h1>
            <FormSignUp/>
            <Button textBtn="Đăng kí"/>    
        </div>
    </div>
  );
};

export default signUp;
