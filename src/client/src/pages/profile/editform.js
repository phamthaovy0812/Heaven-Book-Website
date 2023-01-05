import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import AuthContext  from '../../context/AuthProvider';
import { updateInfoAccount } from '../../api/account';
import { useNavigate } from "react-router-dom";



const FormEdit = () => {
    const account = useContext( AuthContext);
    const [ textInput, setTexInput ] = useState({
        username:account.auth.username,
        _id: account.auth._id,
        firstName: "",
        lastName: "", 
        email: "", 
    });

    
const handleChangeText =( evt )=>{  
    setTexInput({...textInput,[ evt.target.name ] : evt.target.value } )
}

const nav = useNavigate();

const handleUpdateInfo =(event)=>{
    event.preventDefault();
    updateInfoAccount(textInput);  
    nav("/profile");
  
}

console.log(textInput);
     
    return (
        <div class='fatherf'>
            <div class='sonf'>
                <form class='pf_edit'>
                    <div class='fatherf'> <div class='sonf'><div class='pf_text'> CHỈNH SỬA TÀI KHOẢNG</div></div></div>
                   
                    <div class='flex'>
                        <label class='pf_label'>First Name:</label>
                        <input class='pf_input'  name="firstName" onChange={e=>handleChangeText(e)}></input>
                    </div>
                    <div class='flex'>
                        <label class='pf_label'>Last Name:</label>
                        <input class='pf_input' name='lastName'  onChange={e=>handleChangeText(e)}></input>
                    </div>
                    <div class='flex'>
                        <label class='pf_label'>Email:</label>
                        <input class='pf_input' name='email' onChange={e=>handleChangeText(e)}></input>
                    </div>

                    <div class='flex justify-center mt-10'>
                        <Link to='/profile' ><button class='s_btn mr-4'>Hủy</button></Link>
                       
                        <button class='s_btn'onClick={(event)=>handleUpdateInfo(event)}>Cập nhật</button>
                                              
                    </div>
               </form>
            </div>            
        </div>
       
    );
};

export default FormEdit;