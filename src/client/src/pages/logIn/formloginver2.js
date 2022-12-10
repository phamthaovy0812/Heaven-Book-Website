import React from 'react';
import { useRef,useState,useEffect } from 'react' ;



const FormLog = () => {
    const useRef=useRef();
    const errRef=useRef();

    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[errMsg,setErrMsg]=useState('');
    const[success,setSuccess]=useState(false);
    
    useEffect(()=>{
        useRef.current.focus();

    },[])

    useEffect(()=>{
        setErrMsg('');
    },[username,password])
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(username,password);
        setPassword('');
        setSuccess(true);
    }
   
   
     
    return (
        <>
            {success? (
                <section>
                    <h1> Đăng nhập thành công !</h1>
                    <br/>
                    <p>
                        <a href='\home'>Đến Home Page</a>
                    </p>
                </section>
            ):(
  
        

        <form class=" px-28 " onSubmit={handleSubmit}>
            <div >
                <div>
                    <label htmlFor="username" class="text-secondary-gray text-lg font-semibold">Tài khoảng</label>
                    <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    ref={useRef} 
                    autoComplete="off" 
                    onChange={(e)=> setUsername(e.target.value)} 
                    value={username}
                    required 
                    class="bg-amber-50 py-2 w-full mt-1"/>
                    
                </div>
                <div>
                    <label htmlFor="password" class="text-secondary-gray text-lg font-semibold ">Mật khẩu</label>
                   
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    ref={useRef} 
                    onChange={(e)=> setPassword(e.target.value)} 
                    value={password}
                    required 
                    class="bg-amber-50 py-2 w-full mt-1"/>
                </div>
                <div class="flex text-xs underline-offset-2 ">
                    <a href='/forgotpassword' >Quên mật khẩu</a>
                    <p >/</p>
                    <a href='/signup'>Đăng ký</a>
                </div>
                <p ref={errRef} className={errMsg ? "errmsg":"offscreen"} aria-live="assertive"></p>
                
                
                <a href='/home'> <button class="bg-primary mt-10  text-center w-1/4 mb-16 ml-44 py-2 rounded-md font-bold text-lg text-white">Đăng nhập</button> </a>
               
            </div>  
        </form>
            )}
                  </>
        
    );
};

export default FormLog;