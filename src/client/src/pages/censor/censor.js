import { useState, useEffect } from "react";
import SearchBarCategory from "../../components/searchBarCategory";
import ListBook from "./listBook";
import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';
import { getAllPost } from "../../api/main";

const Censor=()=>{
    const [displayPage, setDisplayPage] = useState(0);
    const [ dataListBook, setDataListBook ] = useState(null);
   
    useEffect(()=>{
        getAllPost(setDataListBook);
       
    },[])
    return(
        <div>
            <Header/>
              
                <h1 className='text-primary font-bold  text-3xl text-center my-10 underline'>KIỂM DUYỆT BÀI VIẾT</h1>
                <div className="px-20">
                    <SearchBarCategory/>
                </div>
                <div className="flex justify-center">
                    <button 
                        onClick={()=>setDisplayPage(0)}
                        className={"text-xl font-medium text-slate-400 px-5 py-3 bg-slate-200 rounded-lg mx-2  " + ( displayPage==0 && " text-primary-600 bg-slate-100 border-primary-600 border-2 " )}
                    >
                        Chưa kiểm duyệt
                    </button>
                    <button 
                        onClick={()=>setDisplayPage(1)}
                        className={"text-xl font-medium text-slate-400 px-5 py-3 bg-slate-200 rounded-lg mx-2  " + ( displayPage==1 && " text-primary-600 bg-slate-100 border-primary-600 border-2 " )}
                    >
                        Đã kiểm duyệt
                    </button>
                </div>
                
                {
                    <ListBook status={displayPage} />  
                }
                <Footer/>
        </div>
    )
}
export default Censor;