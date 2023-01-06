import React,{useContext} from 'react';
import IconLike from '../../assets/icon/like.svg';
import IconDisLike from '../../assets/icon/dislike.svg';
import IconAuthor from '../../assets/icon/author.svg';
import  IconLikeChecked from '../../assets/icon/likeChecked.svg';
import  IconDisLikeChecked from '../../assets/icon/dislikeChecked.svg';
import './newfeed.css';
import { updatePost } from "../../api/main";
import AuthContext  from '../../context/AuthProvider';
//import Modal from './modal';

export const Item=({value, refresh})=>{
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
 

  
    return(
        <>
            <img src={value.img} className="w-72 h-64"/>
            <div class="bg-primary-600 h-0.5 w-72 my-5"></div>
            <h1 className='font-semibold text-2xl text-primary'>{value.title}</h1>
            <div className='flex items-stretch my-2 '>
                <img src={IconAuthor} className="w-6 h-6"/>
                <h3 className='text-slate-400 text-lg ml-3 '>{value.author}</h3> 
            </div>
       
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

        </>
        
    )
}
export default Item