import  React from 'react'
import './search.css'
import Header from "../header/header"
import Footer from "../footer/footer"

import ListBook from './search.json';
import PostSearch from './postsearch';

const AfterSearch = () => {
return (
    <div>
        <Header/>
        <div className='search'class='search'>
            <div class='s_text'>SEARCH</div>
            <input class='s_input'></input>
            <button class='s_btn'>Search</button>
        </div>
        
        <div>
        {
                ListBook && ListBook.map((value,index)=>{
                    return (
                        <>
                            {
                               
                                <PostSearch value={value}/>
                              
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
export default AfterSearch