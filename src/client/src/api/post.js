import axios from 'axios';
import { api, postApi } from '../constant/api';

const getAllPost=(setResult)=>{
 
    axios.get(`${api}${postApi}`)
    .then((res)=>{
  
        setResult(res.data.data)
    })
    .catch((err)=>{
        console.log("err : ",err)
    })
}

const createPost=(data)=>{
    axios.post(`${api}${postApi}`,data)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log("err : ",err)
    })
}

export { getAllPost, createPost };