import React from 'react';
import './fullpost.css'
import IconLike from '../../assets/icon/like.svg';
import IconDisLike from '../../assets/icon/dislike.svg';
const Fullpost = ({value}) => {
    return (
        <section>
   
          <div class='hdtext'>NEWFEED</div>
            <div class='fp'>
                <div class='flex'>               
                    <div>
                        <img src= {value.avata} class='pf_avata'/>
                    </div>
                    <div class='pf_pd'>
                        <div class='pf_name'>{value.nameBook}</div>
                        <div class='pf_info'>{value.author}</div>
                        <div class='flex w-1/2 mt-4 mb-4'>
                            <img src={IconLike} alt="React Logo" className='w-10 h-10 cursor-pointer ml-4 mr-2'/>
                            <h4 className='text-center text-2xl text-orange-700 font-medium'>{value.like}</h4>
                            <img src={IconDisLike} alt="React Logo" className='w-10 h-10 cursor-pointer ml-4 mr-2' />
                            <h4 className='text-center text-2xl text-orange-700 font-medium'>{value.dislike}</h4>
                        </div>
                        
                    </div>
            </div>

            <div class='flex'>
            <div class='pf_info'> {value.docs} </div>
            <img src= {value.imagebook} class='fp_img'></img>
            </div>
          </div>
        </section>
        
    );
};

export default Fullpost;

