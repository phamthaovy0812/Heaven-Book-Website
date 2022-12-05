
import React from 'react';
import ListBook from './book.json';
import IconLike from '../../assets/icon/like.svg';
import IconDisLike from '../../assets/icon/dislike.svg';
import IconAuthor from '../../assets/icon/author.svg';
import { ItemBook } from './itemBook';
import './ranking.css';

export const FirstItemBook=({value})=>{
    return (
        <>
            <div className='text-primary font-bold  text-2xl text-center mt-10 mb-4 pl-24 underline'>Review hay nhất </div>
            <div className='flex  mx-24 my-9  m-auto bg-primary-300 '>
               
                <img src={value.image} className="image-size"/>
                <div className=' px-16 flex flex-col justify-around'>
                    <h1 className='font-semibold text-3xl text-primary '>{value.nameBook}</h1>
                    <h3>{value.description}</h3>
                    <div className='flex items-stretch my-2 '>
                        <img src={IconAuthor} className="w-6 h-6"/>
                        <h3 className='text-slate-400 text-lg ml-3  '>{value.author}</h3> 
                    </div>
                    <div className='flex items-center'>
                        <button className='bg-primary w-72 py-2 hover:bg-primary-600 cursor-pointer text-center text-white font-semibold '>
                            Xem thêm
                        </button>
                        <img src={IconLike} alt="React Logo" className='w-10 h-10 cursor-pointer ml-4 mr-2'/>
                        <h4 className='text-center text-2xl text-orange-700 font-medium'>{value.like}</h4>
                        <img src={IconDisLike} alt="React Logo" className='w-10 h-10 cursor-pointer ml-4 mr-2' />
                        <h4 className='text-center text-2xl text-orange-700 font-medium'>{value.dislike}</h4>
                    </div>
                </div>
            </div>
            <div className='text-primary font-bold  text-2xl  mt-10 mb-4 underline w-full pl-24 '>Top 10 review hay  </div>
        </>
    )
}