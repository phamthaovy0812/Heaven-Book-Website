import React from 'react';
import IconLike from '../../assets/icon/like.svg';
import IconDisLike from '../../assets/icon/dislike.svg';
import IconAuthor from '../../assets/icon/author.svg';


const postSearch = ({value}) => {
     
    return (
        <>
       
       <div className='flex ml-48 my-9 h-48  bg-primary-300 '>
               
               <img src={value.img} className="w-96 h-32 mx-2"/>
               <div className=' px-10 flex flex-col justify-around'>
                   <h1 className='font-semibold text-3xl text-primary '>{value.title}</h1>
                   <h3>{value.description}</h3>
                   <div className='flex items-stretch my-2 '>
                       <img src={IconAuthor} className="w-6 h-6"/>
                       <h3 className='text-slate-400 text-lg ml-3  '>{value.author}</h3> 
                   </div>
                   <div className='flex items-center my-4'>
                       <img src={IconLike} alt="React Logo" className='w-10 h-10 cursor-pointer ml-4 mr-2'/>
                       <h4 className='text-center text-2xl text-orange-700 font-medium'>{value.listLike.length}</h4>
                       <img src={IconDisLike} alt="React Logo" className='w-10 h-10 cursor-pointer ml-4 mr-2' />
                       <h4 className='text-center text-2xl text-orange-700 font-medium'>{value.listDislike.length}</h4>
                   </div>
               </div>
           </div>
    </>
        
    );
};

export default postSearch;