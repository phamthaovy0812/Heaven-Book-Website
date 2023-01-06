import  React, { useEffect, useState }  from 'react'
import './search.css'
import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"

// import Item  from '../newfeed/item';
import Item  from '../newfeed/item';
import { getAllPost } from '../../api/main';
import '../newfeed/newfeed.css'


const Search = () => {
    const[loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[searchTitle,setSearchTitle]=useState("");
    
    useEffect(()=>{
        setLoading(true);
        getAllPost(setPosts);
        setLoading(false);
       
    },[])

    const [popupcontent,setpopupcontent]=useState([]);
    const [popuptogle,setpopuptogle]=useState(false);
    const changecontent=(value)=>{
        setpopupcontent([value]);
        setpopuptogle(!popuptogle);
    }
return (
    <div>
        <Header/>
        <div className='search'class='search'>
            <div class='s_text'>SEARCH</div>
            <input class='s_input' name="search" onChange={(e)=> setSearchTitle(e.target.value)}></input>

        </div>
        {loading ? (
            <h4>Loading ...</h4>
        ):(
            <div className='flex flex-wrap mx-10 '>
                 {
                posts &&posts.filter((value) =>{
                    if(searchTitle==="")
                    {
                        return;
                    }else if ( value.title.toLowerCase().includes(searchTitle.toLowerCase()))
                    {
                        return value;
                    }
                     
                
                })
                .map((item,index)=>{
                    return (
                        <>
                            {
                                <div className='flex flex-col w-1/3 justify-center items-center my-10' key={index}>
                                <Item value={item}></Item>
                                <button  className='bg-primary w-52 py-2 hover:bg-primary-600 cursor-pointer' onClick={()=>changecontent(item)}>
                                    <h2 className='text-center text-white font-semibold '>Xem thêm</h2>
                                </button>
                            </div>
                            } 
                        </>
                    )
                })
            }
           
        </div>

        )
        } 
          {popuptogle&& 
            <div className='pop_up_container'  onClick={changecontent}>
                <div className='pop_up_body'>
                    <div className='pop_up_header'>
                        <button onClick={changecontent}>x</button>
                    </div>
                    <div className='pop_up_content'>
                        {popupcontent.map((pop)=>{
                            return (
                                <div>
                                    <div class='pop_up_title'>Book's name: {pop.title}</div>
                                    <div class='pop_up_author'>Author: {pop.author} </div>
                                    <div class='pop_up_desc'>{pop.content}</div>
                        
                                </div>
                            )
                        })}

                    </div>
                </div>
           
            </div>}
           
        <Footer/>
    </div>
)
}
export default Search