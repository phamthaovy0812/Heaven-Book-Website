import  React from 'react'
import './fullpost.css'
import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"

import ListBook from './fullpost.json';
import Fullpost from './fullpostver2';


const SeeFullPost = () => {
return (
    <div>
        <Header/>
        <div>
        {
                ListBook && ListBook.map((value)=>{
                    return (
                        <>
                            {
                                <Fullpost value={value}/>
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
export default SeeFullPost