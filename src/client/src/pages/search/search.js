import  React from 'react'
import './search.css'
import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"


const Search = () => {
return (
    <div>
        <Header/>
        <div className='search'class='search'>
            <div class='s_text'>SEARCH</div>
            <input class='s_input'></input>
            <a href='/aftersearch'> <button class='s_btn'>Search</button></a>
            
        </div>

      
        <Footer/>
    </div>
)
}
export default Search