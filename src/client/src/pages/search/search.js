import  React from 'react'
import './search.css'
import Header from "../header/header"
import Footer from "../footer/footer"
import Item  from '../newfeed/item';
import ListBook from './search.json';

const Search = () => {
return (
    <div>
        <Header/>
        <div className='search'class='search'>
            <div class='s_text'>SEARCH</div>
            <input class='s_input'></input>
            <button class='s_btn'>Search</button>
        </div>
        <div class='s_res'>RESULT</div>

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
        <Footer/>
    </div>
)
}
export default Search