import React, { useState } from 'react';
import IconAuthor from '../../assets/icon/author.svg';
import { updatePost, deletePost } from "../../api/main";

function ItemBook({valueBook, setRefresh, refresh}) {
    const updateStatus =()=> {
        updatePost(
            {
                "_id":valueBook._id,
                "status":1-valueBook.status
            }
        );
        setRefresh(!refresh);
    }

    const handleDeletePost=()=>{
        deletePost(valueBook._id)
        setRefresh(!refresh);
    }
    return (
        <div className={'flex flex-col justify-center my-20 mx-20' }>
            <img src={valueBook.img} className="w-72 h-64"/>
            <div class="bg-primary-600 h-0.5 w-72 my-5"></div>
            <h1 className='font-semibold text-2xl text-primary text-center'>{valueBook.title}</h1>
            <div className='flex my-2 m-auto'>
                <img src={IconAuthor} className="w-6 h-6"/>
                <h3 className='text-slate-400 text-lg ml-3 '>{valueBook.Reviewername}</h3> 
            </div>
       
            <div className='flex w-72 justify-around px-8 mb-2 items-center '>
                <div className=''>
                   
                </div>
               
                <div >
                   
                </div>
            </div>
            <div className='flex justify-around  w-full'>
               {
                    !valueBook.status && 
                        <button className='bg-primary w-28 py-2 hover:bg-primary-600 cursor-pointer ' onClick={updateStatus}>
                            <h2 className='text-center text-white font-semibold'>Duyệt</h2>
                        </button>
                }
                <button className='border-primary border-2 w-28 py-2 cursor-pointer' onClick={handleDeletePost}>
                    <h2 className='text-center text-primary font-semibold  '>Xóa</h2>
                </button>
            </div>
        
            </div>
    );
}

export default ItemBook;
//63b2bc96d35b39ccd8488b31
//63b2bed4d35b39ccd8488b48
//63b2bed5d35b39ccd8488b4a vdeletePost(valueBook._id)