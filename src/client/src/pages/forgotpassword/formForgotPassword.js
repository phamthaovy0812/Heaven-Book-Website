import React from 'react';


const formForgotPassword = () => {
     
    return (
        <form class=" px-28 ">
            <div >
                <div>
                    <label for="username" class="text-secondary-gray text-lg font-semibold">Tài khoản</label>
                    <input type="text" name="username" class="bg-amber-50 py-2 w-full mt-1"></input>
                    <span class="text-orange-500 text-xs ">required</span>
                </div>
                <div>
                    <label for="password" class="text-secondary-gray text-lg font-semibold ">Mật khẩu mới</label>
                    <input type="text" name="password" class="bg-amber-50 py-2 w-full mt-1"></input>
                    <span class="text-orange-500 text-xs">required</span>
                </div>
                <div>
                    <label for="password" class="text-secondary-gray text-lg font-semibold ">Xác nhận lại mật khẩu</label>
                    <input type="text" name="password" class="bg-amber-50 py-2 w-full mt-1"></input>
                    <span class="text-orange-500 text-xs">required</span>
                </div>              
            </div>  
        </form>
        
    );
};

export default formForgotPassword;