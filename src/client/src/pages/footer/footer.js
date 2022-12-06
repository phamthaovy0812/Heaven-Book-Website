import  React from 'react'
import './footer.css'

const Footer = () => {
return (
    <section>
        <header class='footer'>

            <div class='fatherf'>
                <div class='sonf'>
                    < div className='logo' class='flex'>                        
                        <img class="logo" src={require("../../assets/logo.png") }></img>
                        <h1 class="ft_text">Heaven Of Books</h1>                       
                    </div>
                </div>
            </div>

            <div class='fatherf'>
                <div class='sonf'>
                    <div className='menuFootBar'>
                        <ul className='listFBar' class='flex'>
                            <li className='itemFBar' class='ft_li'>
                                <a href="#" >HOME</a>
                            </li>
                            <li className='itemFBar'class='ft_li'>
                                <a href="#" >NEWFEED</a>
                            </li>
                            <li className='itemFBar'class='ft_li'>
                                <a href="#" >POST</a>
                            </li>
                            <li className='itemFBar'class='ft_li'>
                                <a href="#" >RANKING</a>
                            </li>
                            <li className='itemFBar'class='ft_li'>
                                <a href="#" >SEARCH</a>
                            </li>
                            <li className='itemFBar'class='ft_li'>
                                <a href="#" >PROFILE</a>
                            </li>                           
                        </ul>
                    </div>
                </div>
            </div>
              
            <div class='fatherf'>
                <div class='sonf'>
                    <div className='infolink'>
                        <ul class='flex'>
                            <li>
                                <a href="https://github.com/TanKaka123/I2SEGroup6-20CLC02">
                                    <img class='ft_imglink' src={require("../../assets/github.png") }></img>
                                </a>
                            </li>
                            <li >
                                <a href="https://www.facebook.com/hongtan1422002">
                                    <img class='ft_imglink'  src={require("../../assets/fb.png") }></img>
                                </a>
                            </li>
                            <li >
                                <a href="https://www.linkedin.com/in/phamthaovy0812/">
                                    <img class='ft_imglink'  src={require("../../assets/linkedin.png") }></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                
            <div class='fatherf'>
                <div class='sonf'>
                    <div className='infotext' class='flex'>
                        <div ><b>2022 All rights reserved</b> </div>
                        <div class='ft_kc'>..</div>
                        <div class='ft_text'>By group 6 - 20CLC02</div>
                    </div>
                </div>
            </div>           
            
        </header>

    </section>
)
}
export default Footer