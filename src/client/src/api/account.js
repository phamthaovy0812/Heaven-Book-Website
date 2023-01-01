import axios from 'axios';
import { api, account,signup } from '../constant/api';

// const getAllAccount=()=>{
//     axios.get(`${api}${accountApi}`)
//     .then((res)=>{
//         console.log(res.data)
//     })
//     .catch((err)=>{
//         console.log("err : ",err)
//     })
// }

const createAccount=(data)=>{
    console.log(`${api}${account}${signup}`)
    axios.post(`${api}${account}${signup}`,data)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log("err : ",err)
    })
}

export {  createAccount };