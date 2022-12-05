import React from 'react';
import ListBook from './book.json';
import { ItemBook } from './itemBook';
import { FirstItemBook } from './firstItemBook';
import './ranking.css';


const ranking = () => {
    return (
        <div className=''>
             <img alt="Thumbnail" src={require("../../assets/banner_ranking.png")} class="w-screen " />
             <h1 className='text-primary font-bold  text-3xl text-center my-10 underline'>SÁCH BÌNH CHỌN HAY NHẤT</h1>
             <div className='flex flex-wrap mx-10 '>
            {
                ListBook && ListBook.map((value,index)=>{
                    return (
                        <>
                            {
                                index===0 ?
                                <FirstItemBook value={value}/>:    
                                <div className='flex flex-col w-1/3 justify-center items-center my-10' key={index}>
                                    <ItemBook value={value}/>
                                </div>
                            } 
                        </>
                    )

                
                })
            }
            </div>
        </div>
    );
};

export default ranking;