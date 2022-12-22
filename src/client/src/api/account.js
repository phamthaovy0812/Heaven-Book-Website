import axios from 'axios';
import { api, accountApi } from '../constant/api';

const getAllAccount=()=>{
    axios.get(`${api}${accountApi}`)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log("err : ",err)
    })
}

const createAccount=(data)=>{
    axios.post(`${api}${accountApi}`,data)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log("err : ",err)
    })
}

export { getAllAccount, createAccount };