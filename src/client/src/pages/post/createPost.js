import React, {useEffect, useState, useContext} from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import { createPost, updateInfoAccount } from '../../api/main';
import AuthContext  from '../../context/AuthProvider';


const InputBar = ({name,title, handleOnChange}) => {
  return (
    <div className="w-2/4">
        <div class="mb-6">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
            <input type="text"  name={name}
                id="default-input" 
                onChange={e=>handleOnChange(e)}
                class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:outline-none focus:bg-white focus:border-orange-600 w-full"/>
        </div>
    </div>
  );
};

const Select=({name,title, handleOnChange})=>{
    return (
        <div className="w-2/4">
            <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
            <select 
                    onChange={e=>handleOnChange(e)}
                    id="small" 
                    name={name} class="block w-full p-2.5 mb-6 text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-600">
                <option selected className="checked:bg-primary-600">Chọn thể loại</option>
                <option value="Self-help">Self-help</option>
                <option value="Tiểu thuyết">Tiểu thuyết</option>    
            </select>
        </div>
    )
}

const TextArea = ({name,title, handleOnChange})=>{
    return (
        <div className="w-2/4">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
            <textarea 
                onChange={e=>handleOnChange(e)}
                id="message" name={name} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" placeholder="Write your thoughts here..."></textarea>
        </div>
    )
}
const Upload =({ name, title, setOnChangeText, onChangeText })=>{

    const [base64Iamge, setBase64Image ]=useState(null)
    const getBase64 = file => {
        return new Promise(resolve => {
        let baseURL = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            baseURL = reader.result;
            setBase64Image(baseURL);
            setOnChangeText({ ...onChangeText, [name]: baseURL }); 
            resolve(baseURL);
        };
        });
    };
    
    return(
        <div className="w-2/4 mb-6">
            <h1 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</h1>
            <div class="flex items-center justify-center w-full">
                
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            { 
                                !base64Iamge && 
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            }
                            {
                                base64Iamge && 
                                <img alt="not fount" width={"250px"} src={base64Iamge} className="max-w-md max-h-48"/>
                            }
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                    
                        <input id="dropzone-file" type="file" class="hidden" onChange={(event) => {
                            getBase64(event.target.files[0])
                        }} />
                </label>
            </div> 
        </div>
    )
}
const CreatePost = () => {
    const [ displayErr, setDisplayErr ] = useState(false);
    const account = useContext( AuthContext);
    const [ res, setRes ] = useState(null);
    const [onChangeText, setOnChangeText ] = useState({
        status : false,
        idReviewer: account.auth._id,
        Reviewername: account.auth.firstName +account.auth.lastName,
        title:"",
        author :"",
        category:"",
        description:" ",
        content : "",
        img : ""
    });  
    const handleOnChange = evt => { 
        setOnChangeText({ ...onChangeText, [evt.target.name]: evt.target.value }); 
      };

    const handleSubmit =() =>{
        if(onChangeText.title && onChangeText.author && onChangeText.category && onChangeText.content && onChangeText.img)
            createPost(onChangeText, setRes);
            
    }

    useEffect(()=>{
        if(res)
        {
            const newListIdPost = account.auth.listIdPosted
            newListIdPost.push(res._id);
            account.setAuth(
                {...account.auth,
                    ["listIdPosted"]:newListIdPost,
                });

                const dataReq = {
                    "_id" : account.auth._id,
                    "username" : account.auth.username,
                    "listIdPosted" :newListIdPost
                }
                
                updateInfoAccount(dataReq)
        }
    },[res])
  return (
    <div>
        <Header />
        <h1 className="text-primary font-bold  text-3xl text-center my-10 underline">
            TẠO BÀI REVIEW
        </h1>
        <div className="flex flex-col items-center">
            <InputBar name="title" title="Tên sách" handleOnChange={handleOnChange} />
            <InputBar name="author" title="Tác giả" handleOnChange={handleOnChange}/>
            <Select name="category" title="Thể loại" handleOnChange={handleOnChange}/>
            <TextArea name="content" title="Nội dung review" handleOnChange={handleOnChange}/>
            <Upload name="img" title="Hình ảnh mô tả" setOnChangeText={setOnChangeText} onChangeText={onChangeText}/>
            
            <button className='bg-primary w-52 py-2 hover:bg-primary-600 cursor-pointer my-6' onClick={handleSubmit}>
                <h2 className='text-center text-white font-semibold '>Gửi bài review</h2>
            </button>
        </div>
        <Footer />
        
    </div>
  );
};

export default CreatePost;
