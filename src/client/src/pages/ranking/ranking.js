import React, { useEffect, useState } from 'react';
import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';
import { ItemBook } from './itemBook';
import { FirstItemBook } from './firstItemBook';
import './ranking.css';
import { getAllPost } from '../../api/main';

const Ranking = () => {

    const [ dataListBook, setDataListBook ] = useState(null);
    const [ refresh, setRefresh ] = useState(true)
    useEffect(()=>{
        getAllPost(setDataListBook);
       
    },[refresh])
  
    const REFRESH ={ refresh, setRefresh };

    return (
        <div className=''>
            <Header/>
             <img alt="Thumbnail" src={require("../../assets/banner_ranking.png")} class="w-screen " />
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
                                 </div>
                            } 
                        </>
                    )

                
                })
            }
            </div>
            <Footer/>
        </div>
    );
};

export default Ranking;