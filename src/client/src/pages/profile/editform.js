import React from 'react';


const formEdit = () => {
     
    return (
        <div class='fatherf'>
            <div class='sonf'>
                <form class='pf_edit'>
                    <div class='fatherf'> <div class='sonf'><div class='pf_text'> CHỈNH SỬA TÀI KHOẢNG</div></div></div>
                    
                    <div class='flex '>
                        <label class='pf_label '>Tài khoảng:</label>
                        <input class='pf_input'></input>
                    </div>
                    <div class='flex'>
                        <label class='pf_label'>Mật khẩu:</label>
                        <input class='pf_input'></input>
                    </div>
                    <div class='flex'>
                        <label class='pf_label'> Xác nhận mật khẩu:</label>
                        <input class='pf_input'></input>
                    </div>
                    <div class='flex'>
                        <label class='pf_label'>Tên hiển thị:</label>
                        <input class='pf_input'></input>
                    </div>
                    <div class='flex'>
                        <label class='pf_label'>Ngày sinh:</label>
                        <input class='pf_input'></input>
                    </div>
                    <div class='flex'>
                        <label class='pf_label'>Quê quán:</label>
                        <input class='pf_input'></input>
                    </div>
                    <div class='flex'>
                        <label class='pf_label'>Sở thích cá nhân:</label>
                        <input class='pf_input'></input>
                    </div>

                    <div class='flex justify-center mt-10'>
                        <button class='s_btn mr-4'>Hủy</button>
                        <button class='s_btn'>Cập nhật</button>
                    </div>
                
                
                </form>

            </div>
            
        </div>
       
    );
};

export default formEdit;