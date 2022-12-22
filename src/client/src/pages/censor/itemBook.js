import React from 'react';
import IconAuthor from '../../assets/icon/author.svg';

function ItemBook({valueBook}) {
    return (
        <div className='flex flex-col justify-center my-10'>
            <img src={valueBook.image} className="w-72 h-64"/>
            <div class="bg-primary-600 h-0.5 w-72 my-5"></div>
            <h1 className='font-semibold text-2xl text-primary text-center'>{valueBook.nameBook}</h1>
            <div className='flex my-2 m-auto'>
                <img src={IconAuthor} className="w-6 h-6"/>
                <h3 className='text-slate-400 text-lg ml-3 '>{valueBook.author}</h3> 
            </div>
       
            <div className='flex w-72 justify-around px-8 mb-2 items-center '>
                <div className=''>
                   
                </div>
               
                <div >
                   
                </div>
            </div>
            <div className='flex justify-around  w-full'>
                <div className='bg-primary w-28 py-2 hover:bg-primary-600 cursor-pointer '>
                    <h2 className='text-center text-white font-semibold  '>Duyệt</h2>
                </div>
                <div className='border-primary border-2 w-28 py-2 cursor-pointer '>
                    <h2 className='text-center text-primary font-semibold  '>Xóa</h2>
                </div>
            </div>
           
        </div>
    );
}

export default ItemBook;