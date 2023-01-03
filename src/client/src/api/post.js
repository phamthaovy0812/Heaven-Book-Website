import axios from 'axios';
import { api, post } from '../constant/api';

const getAllPost=(setResult)=>{
    console.log(`${api}${post}`)
    axios.get(`${api}${post}`)
    .then((res)=>{

        setResult(res.data)
        console.log("->",res.data)
    })
    .catch((err)=>{
        console.log("err : ",err)
    })
}


const updatePost=(data)=>{
    console.log(`${api}${post}${data._id}`)
    axios.put(`${api}${post}${data._id}`,data)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log("err : ",err)
    })
}

const createPost=(data)=>{
    axios.post(`${api}${post}`,data)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log("err : ",err)
    })
}

const deletePost=(id)=>{
    console.log("id",id)
    axios.delete(`${api}${post}${id}`)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log("err : ",err)
    })
}


export { getAllPost, updatePost, deletePost, createPost };