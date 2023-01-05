import React,{useState} from 'react';
import IconLike from '../../assets/icon/like.svg';
import IconDisLike from '../../assets/icon/dislike.svg';
import IconAuthor from '../../assets/icon/author.svg';
import './newfeed.css';
//import Modal from './modal';

export const Item=({value})=>{
  
    return(
        <>
            <img src={value.img} className="w-72 h-64"/>
            <div class="bg-primary-600 h-0.5 w-72 my-5"></div>
            <h1 className='font-semibold text-2xl text-primary'>{value.title}</h1>
            <div className='flex items-stretch my-2 '>
                <img src={IconAuthor} className="w-6 h-6"/>
                <h3 className='text-slate-400 text-lg ml-3 '>{value.author}</h3> 
            </div>
       
            <div className='flex w-72 justify-around px-8 mb-2 items-center '>
                <div className=''>
                    <img src={IconLike} alt="React Logo" className='w-10 h-10 cursor-pointer'/>
                    <h4 className='text-center'>{value.listLike.length}</h4>
                </div>
               
                <div >
                    <img src={IconDisLike} alt="React Logo" className='w-10 h-10 cursor-pointer' />
                    <h4 className='text-center'>{value.listDislike.length}</h4>
                </div>
            </div>
            <button  className='bg-primary w-52 py-2 hover:bg-primary-600 cursor-pointer' >
                <h2 className='text-center text-white font-semibold '>Xem thêm</h2>
            </button>

            <div className='modal-container relative h-[100vh]'>
                <div className='bg-modal bg-opacity-30 bg-black absolute top-0 bottom-0 right-0 left-0'>
                    <div className='modal w-[30vw] p-9 bg-white'>
                        <div>Tên sách: {value.title}</div>
                        <div>Author: {value.author}</div>
                        <div class="flex">
                            <img src={IconLike} alt="React Logo" className='w-10 h-10 cursor-pointer' />
                            <div>{value.listLike.length}</div>
                        </div>

                        <div class="flex">
                        <img src={IconDisLike} alt="React Logo" className='w-10 h-10 cursor-pointer' />
                            <div>{value.listDislike.length}</div>
                        </div>

                        <div class='flex'>
                            <div>{value.content}</div>
                            <div>{value.image}</div>
                        </div>
                        
                    </div>
                </div>
            </div>





            
        </>
    )
}
export default Item