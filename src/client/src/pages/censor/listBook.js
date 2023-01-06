import React,{useState, useEffect} from 'react';
import ItemBook from './itemBook';
import { getAllPost } from "../../api/main";
import IconLike from '../../assets/icon/like.svg';
import IconDisLike from '../../assets/icon/dislike.svg';

const ListBook = ({status}) => {
    const [ dataListBook, setDataListBook ] = useState([]);
    const [refresh, setRefresh] = useState(true)
    useEffect(()=>{
        getAllPost(setDataListBook);
    },[refresh])

    const sizeDataOfStatus = dataListBook.filter(v=>{return v.status==status}).length 
    
    
console.log( ( sizeDataOfStatus ))


const [popupcontent,setpopupcontent]=useState([]);
const [popuptogle,setpopuptogle]=useState(false);
const changecontent=(value)=>{
    setpopupcontent([value]);
    setpopuptogle(!popuptogle);
}

    return (
        <div>
            <div className="flex justify-around items-center flex-wrap">
                { 
                    dataListBook && dataListBook.map((itemBook, index)=>{
                     // eslint-disable-next-line no-lone-blocks
                     {
                            if(status == itemBook.status) 
                                return(  
                                    <div > 
                                        <ItemBook valueBook = {itemBook} setRefresh={setRefresh} refresh={refresh}/>
                                        <div class='fatherf'>
                                            <div class='sonf'>
                                            <button  className='bg-primary w-64 mb-10 py-2 hover:bg-primary-600 cursor-pointer' onClick={()=>changecontent(itemBook)}>
                                                <h2 className='text-center text-white font-semibold '>Xem chi tiết</h2>
                                            </button>

                                            </div>
                                        </div>
                                        
                                    </div>  
                                )
                        }
                    })

                  
                } 
                {
                    ( sizeDataOfStatus%3==2 )   &&  <div className='w-72 mx-20'></div>
                }
                 {
                    ( sizeDataOfStatus%3==1 )   &&  <><div className='w-72 mx-20'></div> <div className='w-72 mx-20'></div></>
                }
            </div>
            { popuptogle&& 
            <div className='pop_up_container'  onClick={changecontent}>
                <div className='pop_up_body'>
                    <div className='pop_up_header'>
                        <button onClick={changecontent}>X</button>
                    </div>

                    <div className='pop_up_content'>
                        {popupcontent.map((pop)=>{
                            return (
                                <div class="flex ">
                                    <div class='w-4/6'>
                                        <div class='pop_up_title'>Book's name: {pop.title}</div>
                                        <div class='pop_up_author'>Author: {pop.author} </div>
                                        <div class='pop_up_author'>Category: {pop.category}</div>
                                        <div class='flex mb-4 mt-2'>
                                                <img src={IconLike} alt="React Logo" className='w-10 h-10 cursor-pointer ml-4 mr-2'/>
                                                <h4 className='text-center text-2xl text-orange-700 font-medium'>{pop.listLike.length}</h4>
                                                <img src={IconDisLike} alt="React Logo" className='w-10 h-10 cursor-pointer ml-4 mr-2' />
                                                <h4 className='text-center text-2xl text-orange-700 font-medium'>{pop.listDislike.length}</h4>
                                        </div>
                                        <div class='pop_up_desc'>{pop.content}</div>
                                    </div>
                                
                                    <div class='pop_up_img'>
                                        <img src={pop.img}></img>
                                    </div>                               
                                </div>
                            )
                        })}

                    </div>
                </div>
           
            </div>}
        

        </div>
       
    );
};

export default ListBook;
