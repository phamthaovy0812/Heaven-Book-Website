 import  React from 'react'
import Header from "../header/header"
import Footer from "../footer/footer"
import './newfeed.css'
import ListBook from './book.json';
import Item  from './item';


const NewFeed = () => {
return (
    <div>
        <Header/>

        <h1 class='hdtext'>NEWFEED</h1>
        <div className='flex flex-wrap mx-10 '>
            {
                ListBook && ListBook.map((value,index)=>{
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
        
        <div class='nf_flex'>
            <button class='nf_btn'>Trang trước</button>
            <button class='nf_btn'>Trang sau</button>
            
        </div>
        <Footer/>
    </div>
)
}
export default NewFeed