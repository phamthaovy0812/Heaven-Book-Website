 import  React, { useEffect, useState } from 'react'
 import Header from "../../layout/header/header"
 import Footer from "../../layout/footer/footer"
import './newfeed.css'

import Item  from './item';
import { getAllPost } from '../../api/main';



const NewFeed = () => {
    const [ dataListBook, setDataListBook ] = useState(null);

    useEffect(()=>{
        getAllPost(setDataListBook);
       
    },[])
    console.log(dataListBook)

return (
    <div>
        <Header/>

        <h1 class='hdtext'>NEWFEED</h1>
        <div className='flex flex-wrap mx-10 '>
            {
                dataListBook && dataListBook.map((value,index)=>{
                    return (
                        <>
                            {
                                <div className='flex flex-col w-1/3 justify-center items-center my-10' key={index}>
                                    <Item value={value}/>
                                </div>
                            } 
                        </>
                    )
                })
            }
        </div>
        
        <Footer/>
    </div>
)
}
export default NewFeed