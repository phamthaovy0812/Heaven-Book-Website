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

// const createPost=(data)=>{
//     axios.post(`${api}${postApi}`,data)
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch((err)=>{
//         console.log("err : ",err)
//     })
// }

export { getAllPost };