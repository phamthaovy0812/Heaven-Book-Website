import React, {useContext} from 'react';
import ListBook from './book.json';
import IconLike from '../../assets/icon/like.svg';
import IconDisLike from '../../assets/icon/dislike.svg';
import IconAuthor from '../../assets/icon/author.svg';
import  IconLikeChecked from '../../assets/icon/likeChecked.svg';
import  IconDisLikeChecked from '../../assets/icon/dislikeChecked.svg';
import { updatePost } from "../../api/main";
import AuthContext  from '../../context/AuthProvider';
import { ItemBook } from './itemBook';
import './ranking.css';

export const FirstItemBook=({value, refresh})=>{

    
    const account = useContext( AuthContext);

    function removeItem(arr, item){
        return arr.filter(f => f !== item)
       }
       var newListLike = value.listLike;
       var newListDislike = value.listDislike;
    
    
    const handleLike=()=>{
        value.listLike.includes(account.auth._id) ? newListLike= removeItem(newListLike,account.auth._id ) : newListLike.push(account.auth._id);
        if( value.listDislike.includes(account.auth._id))
        newListDislike = removeItem(newListDislike,account.auth._id )
        updatePost( 
            {
                "_id": value._id,
                "listLike": newListLike,
                "listDislike": newListDislike
            }
        );
        refresh.setRefresh(!refresh.refresh);
    }
  
    const handleDislike = () =>{
        value.listDislike.includes(account.auth._id) ? newListDislike= removeItem(newListDislike,account.auth._id ) : newListDislike.push(account.auth._id);
        if( value.listLike.includes(account.auth._id) )
            newListLike = removeItem(newListLike,account.auth._id )  ;
        
        updatePost(
            { 
                "_id": value._id,
                "listLike": newListLike,
                "listDislike": newListDislike
            }
        );
        refresh.setRefresh(!refresh.refresh);
    }

    return (
        <>
          <div className='text-primary font-bold  text-2xl text-center mt-10 mb-4 pl-24 underline'>Review hay nhất </div>
            <div className='flex  mx-24 my-9  m-auto bg-primary-300 '>
               
                <img src={value.img} className="image-size"/>
                <div className=' px-16 flex flex-col justify-around'>
                    <h1 className='font-semibold text-3xl text-primary '>{value.title}</h1>
                       <div className='w-full'>
                            <h3 className='text-slate-400 text-xl ml-3 my-3 text-left ' >  <b>Tác giả : </b>{value.author}</h3> 
                        </div>
                    <h3 className='ml-4'>{value.content.substring(0, 400)}...</h3>
                    <div className='flex items-center justify-between'>
                        <button className='bg-primary w-72 py-2 hover:bg-primary-600 cursor-pointer text-center text-white font-semibold '>
                            Xem thêm
                        </button>
                        <div className='flex w-72 justify-around px-8 mb-2 items-center '>
                            <button onClick={()=>handleLike()}>
                                { 
                                value.listLike.includes(account.auth._id) ?
                                <img src={IconLikeChecked} alt="React Logo" className='w-10 h-10 cursor-pointer'/>
                                :
                                    <img src={IconLike} alt="React Logo" className='w-10 h-10 cursor-pointer'/>
                                }
                                <h4 className='text-center'>{value.listLike.length}</h4>
                            </button>
                        
                            <button onClick={ ()=> handleDislike() }>
                                {
                                    value.listDislike.includes(account.auth._id) ?
                                    <img src={IconDisLikeChecked} alt="React Logo" className='w-10 h-10 cursor-pointer' />
                                    :
                                    <img src={IconDisLike} alt="React Logo" className='w-10 h-10 cursor-pointer' />
                                }
                                <h4 className='text-center'>{value.listDislike.length}</h4>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-primary font-bold  text-2xl  mt-10 mb-4 underline w-full pl-24 '>Top 10 review hay  </div>
    
        </>
    )
}