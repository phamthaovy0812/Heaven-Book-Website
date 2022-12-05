import React from 'react';
import IconLike from '../../assets/icon/like.svg';
import IconDisLike from '../../assets/icon/dislike.svg';
import IconAuthor from '../../assets/icon/author.svg';
import './ranking.css';

export const ItemBook=({value})=>{
    return(
        <>
            <img src={value.image} className="w-72 h-64"/>
           
            <div class="bg-primary-600 h-0.5 w-72 my-5"></div>
            <h1 className='font-semibold text-2xl text-primary'>{value.nameBook}</h1>
            <div className='flex items-stretch my-2 '>
                <img src={IconAuthor} className="w-6 h-6"/>
                <h3 className='text-slate-400 text-lg ml-3 '>{value.author}</h3> 
            </div>
        
            <div className='flex w-72 justify-around px-8 mb-2 items-center '>
                <div className=''>
                    <img src={IconLike} alt="React Logo" className='w-10 h-10 cursor-pointer'/>
                    <h4 className='text-center'>{value.like}</h4>
                </div>
                
                <div >
                    <img src={IconDisLike} alt="React Logo" className='w-10 h-10 cursor-pointer' />
                    <h4 className='text-center'>{value.dislike}</h4>
                </div>
            </div>
            <div className='bg-primary w-52 py-2 hover:bg-primary-600 cursor-pointer'>
                <h2 className='text-center text-white font-semibold '>Xem thêm</h2>
            </div>
        </>
    )
}