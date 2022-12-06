import React from 'react';
import './error.css'
const error = () => {
    return (
        <section>
           <header class='error'>
            <div class='fatherf'>
                <div class='sonf'>
                    <img class='er_img' src={require("../../assets/error.png")}></img>
                </div>

            </div>
            <div class='fatherf'>
                <div class='sonf'>
                    <button class='er_btn'> BACK</button>

                </div>

            </div>
            <div class='fatherf'>
                <div class='sonf er_text'>
                    <div>Oops! There has been a server overload or technical problems. </div>
                    <div>Please wait a moment and reload the page or press BACK to return to the Home Page.</div>
                </div>

            </div>

           </header>

        </section>
        
    );
};

export default error;

