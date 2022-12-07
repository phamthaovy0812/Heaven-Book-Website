import  React from 'react'
import './profile.css'
import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
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