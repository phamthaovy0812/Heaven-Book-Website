import React,{useState, useEffect} from 'react';
import ItemBook from './itemBook';
import { getAllPost } from "../../api/main";

const ListBook = ({status}) => {
    const [ dataListBook, setDataListBook ] = useState([]);
    const [refresh, setRefresh] = useState(true)
    useEffect(()=>{
        getAllPost(setDataListBook);
    },[refresh])

    const sizeDataOfStatus = dataListBook.filter(v=>{return v.status==status}).length 
    
    
console.log( ( sizeDataOfStatus ))
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
        </div>
    );
};

export default ListBook;
