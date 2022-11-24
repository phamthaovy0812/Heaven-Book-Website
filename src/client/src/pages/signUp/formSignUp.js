import React from 'react';


const formSignUp = () => {
     
    return (
        <form class=" px-28 ">
            <div class="flex justify-between ">
                {
                    [
                       [ 'first-name', 'Họ' ],
                       [ 'last-name', 'Tên' ]
                    ].map(([name, desc], index)=>{
                        return(
                            <div key={index}>
                                <lable for={name} class="text-secondary-gray text-xl font-medium">{desc}</lable><br/>
                                <input type="text" id={name} name={name} class="bg-amber-50 py-2 w-64 mt-1"/>
                            </div>
                        )
                    })
                }
            </div>
           {
            [
                ['account','Tài khoản'],
                ['password','Mật khẩu'],
                ['email','Email']
            ].map(([name,desc],index)=>{
                return (
                    <div key={index} class="my-5">
                        <lable for={name} class="text-secondary-gray text-xl font-medium">{desc}</lable><br/>
                        <input type="text" id={name} class="bg-amber-50 py-2 w-full mt-1"/><br/>
                    </div>
                )
            })
           }
        </form>
    );
};

export default formSignUp;