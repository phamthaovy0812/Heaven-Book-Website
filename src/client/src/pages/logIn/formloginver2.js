import React from 'react';
import { useRef,useState,useEffect,useContext} from 'react' ;
import AuthContext from "../../context/AuthProvider";
import axios from '../../api/axios';
const LOGIN_URL ='/auth';
const FormLog = () => {
    const {setAuth}=useContext(AuthContext);
    const userRef=useRef();
    const errRef=useRef();

    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[errMsg,setErrMsg]=useState('');
    const[success,setSuccess]=useState(false);
    
    useEffect(()=>{
        userRef.current.focus();

    },[])

    useEffect(()=>{
        setErrMsg('');
    },[username,password])
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        
        try {
            const response= await axios.post(LOGIN_URL,JSON.stringify({username,password}),
            {
                headers:{'Content-Type':'appllication/json'},
                withCredentials:true
            });
            console.log(JSON.stringify(response?.data));
            const accessToken =response?.data?.accessToken;
            const roles=response?.data?.roles;
            setAuth({username,password,roles,accessToken});
            setUsername('');
            setPassword('');
            setSuccess(true);

        }catch (err){
            if (!err?.response){
                setErrMsg('No server response');
            }else if (err.response?.status ===400){
                setErrMsg('Missing Username or Password');
            }else if (err.response?.status===401){
                setErrMsg('Unauthorized');
    
            }else{
                setErrMsg('Log In false');
            }
            errRef.current.focus();


        }
       
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
                    ref={userRef} 
                    autoComplete="off" 
                    onChange={(e)=> setUsername(e.target.value)} 
                    value={username}
                    required 
                    class="bg-amber-50 py-2 w-full mt-2 mb-2"/>
                    
                </div>
                <div>
                    <label htmlFor="password" class="text-secondary-gray text-lg font-semibold mt-6">Mật khẩu</label>
                   
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    ref={userRef} 
                    onChange={(e)=> setPassword(e.target.value)} 
                    value={password}
                    required 
                    class="bg-amber-50 py-2 w-full mt-2 mb-2"/>
                </div>
                <div class="flex text-xs underline-offset-2 mt-2">
                    <a href='/forgotpassword' >Quên mật khẩu</a>
                    <p >/</p>
                    <a href='/signup'>Đăng ký</a>
                </div>
                <p ref={errRef} className={errMsg ? "errmsg":"offscreen"} aria-live="assertive"></p>
                
                
                <a href='/home'> <button class="bg-primary mt-10  text-center w-1/2  py-2 rounded-md font-bold text-lg text-white">Đăng nhập</button> </a>
               
            </div>  
        </form>
            )}
                  </>
        
    );
};

export default FormLog;