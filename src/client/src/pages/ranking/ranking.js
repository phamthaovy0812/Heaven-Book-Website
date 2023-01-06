import React, { useEffect, useState } from 'react';
import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';
import { ItemBook } from './itemBook';
import { FirstItemBook } from './firstItemBook';
import './ranking.css';
import { getAllPost } from '../../api/main';
import '../newfeed/newfeed.css'

const Ranking = () => {

    const [ dataListBook, setDataListBook ] = useState(null);
    const [ refresh, setRefresh ] = useState(true)
    useEffect(()=>{
        getAllPost(setDataListBook);
       
    },[refresh])
  
    const REFRESH ={ refresh, setRefresh };

    
    const [popupcontent,setpopupcontent]=useState([]);
    const [popuptogle,setpopuptogle]=useState(false);
    const changecontent=(value)=>{
        setpopupcontent([value]);
        setpopuptogle(!popuptogle);
    }

    return (
        <div className=''>
            <Header/>
             <h1 className='text-primary font-bold  text-3xl text-center my-10 underline'>SÁCH BÌNH CHỌN HAY NHẤT</h1>
             <div className='flex flex-wrap mx-10 '>
             {
                dataListBook && dataListBook.map((value,index)=>{
                    return (
                        <>
                            {
                                 index===0 ?
                                <FirstItemBook value={value} refresh = { REFRESH }/>
                                :    
                                 <div className='flex flex-col w-1/3 justify-center items-center my-10' key={index}>
                                     <ItemBook value={value} refresh = { REFRESH }/>
                                     <button  className='bg-primary w-52 py-2 hover:bg-primary-600 cursor-pointer' onClick={()=>changecontent(value)}>
                                        <h2 className='text-center text-white font-semibold '>Xem thêm</h2>
                                    </button>
                                 </div>
                            } 
                        </>
                    )

                
                })
            }
            </div>
            {popuptogle&& 
            <div className='pop_up_container'  onClick={changecontent}>
                <div className='pop_up_body'>
                    <div className='pop_up_header'>
                        <button onClick={changecontent}>x</button>
                    </div>
                    <div className='pop_up_content'>
                        {popupcontent.map((pop)=>{
                            return (
                                <div>
                                    <div class='pop_up_title'>Book's name: {pop.title}</div>
                                    <div class='pop_up_author'>Author: {pop.author} </div>
                                    <div class='pop_up_desc'>{pop.content}</div>
                        
                                </div>
                            )
                        })}

                    </div>
                </div>
           
            </div>}
            
            
            <Footer/>
        </div>
    );
};

export default Ranking;