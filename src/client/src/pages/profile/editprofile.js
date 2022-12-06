import  React from 'react'
import './profile.css'
import Header from "../header/header"
import Footer from "../footer/footer"
import FormEdit from './editform'


const editProfile = () => {
return (
    <div>
        <Header/>
       <div>

        <FormEdit/>

       </div>
        <Footer/>
    </div>
)
}
export default editProfile