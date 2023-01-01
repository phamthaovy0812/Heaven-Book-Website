
const InputRow =({name, desc, index, handleOnChange})=>{
    return (
        <div  className={index==0?"mr-4":""}>
            <lable  for={name} class="text-secondary-gray text-xl font-medium">{desc}</lable>
            <input type="text" id={name} name={name} class="bg-amber-50 py-2 w-64 mt-1" onChange={e=>handleOnChange(e)}/>
        </div>
    )
}

const InputCol =({name, desc, handleOnChange}) =>{
    return(
        <div class="my-5">
            <lable for={name} class="text-secondary-gray text-xl font-medium">{desc}</lable><br/>
            <input type="text" id={name} name={name} class="bg-amber-50 py-2 w-full mt-1" onChange={e=>handleOnChange(e)}/><br/>
        </div>
    )
}
const FormSignUp = ({onChange, setOnChange}) => {   
    const handleOnChange = evt => { 
        setOnChange({ ...onChange, [evt.target.name]: evt.target.value }); 
      };

    return (
        <form class=" px-28 ">
        <div class="flex justify-between ">
            <InputRow name='firstName' desc='Họ' index={0}  handleOnChange={handleOnChange}/>    
            <InputRow name='lastName' desc='Tên' index={1}  handleOnChange={handleOnChange}/>
        </div>

        <InputCol name='username' desc='Tài khoản' handleOnChange={handleOnChange}/>
        <InputCol name='password' desc='Mật khẩu' handleOnChange={handleOnChange}/>
        <InputCol name='email' desc='Email' handleOnChange={handleOnChange}/>
    </form>
    );
};

export default FormSignUp;