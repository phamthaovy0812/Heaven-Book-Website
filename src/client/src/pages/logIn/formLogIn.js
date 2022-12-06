import React from 'react';


const formLogIn = () => {
     
    return (
        <form class=" px-28 ">
            <div >
                <div>
                    <label for="username" class="text-secondary-gray text-lg font-semibold">Tài khoản</label>
                    <input type="text" name="username" class="bg-amber-50 py-2 w-full mt-1"></input>
                    <span class="text-orange-500 text-xs ">required</span>
                </div>
                <div>
                    <label for="password" class="text-secondary-gray text-lg font-semibold ">Mật khẩu</label>
                    <input type="text" name="password" class="bg-amber-50 py-2 w-full mt-1"></input>
                    <span class="text-orange-500 text-xs">required</span>
                </div>
                <div class="flex text-xs underline-offset-2 ">
                    <a href='/src/pages/signUp/signUp.js' >Quên mật khẩu</a>
                    <p >/</p>
                    <a href='/src/pages/signUp/signUp.js' >Đăng ký</a>
                </div>
               
            </div>  
        </form>
        
    );
};

export default formLogIn;