import React from 'react';




const formLogIn = () => {
   
     
    return (
      

        <form class=" px-28 ">
            <div >
                <div>
                    <label htmlFor="username" class="text-secondary-gray text-lg font-semibold ">Tài khoảng</label>
                    <input 
                    type="text" 
                    name="username" 
                    id="username" 
                 
                    autoComplete="off" 
                 
                    required 
                    class="bg-amber-50 py-2 w-full mt-2 mb-4"/>
                    
                </div>
                <div>
                    <label htmlFor="password" class="text-secondary-gray text-lg font-semibold mt-6 ">Mật khẩu</label>
                   
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 

                    required 
                    class="bg-amber-50 py-2 w-full mt-2"/>
                </div>
                <div class="flex text-xs underline-offset-2 mt-4 ">
                    
                    <a href='/signup'> Đăng ký tài khoản</a>
                </div>
              
                
                <a href='/home'> <button class="bg-primary w-1/2  text-center mt-4 py-2 rounded-md font-bold text-lg text-white">Đăng nhập</button> </a>
               
            </div>  
        </form>
        
    );
};

export default formLogIn;