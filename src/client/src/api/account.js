import axios from 'axios';
import { api, account,signup, login, changePassword,updateInfo } from '../constant/api';

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


const loginAccount=(data, setRes)=>{
    console.log("Data : ",data)
    axios.post(`${api}${account}${login}`,data)
    .then((res)=>{
        setRes(res)
        console.log(res);
    })
    .catch((err)=>{
        console.log("err : ",err)
    })
}

const changePassAccount=(data)=>{
    console.log(data)

    axios.post(`${api}${account}${changePassword}`,data)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log("err : ",err)
    })
}

const updateInfoAccount=(data)=>{
    console.log(data)
    axios.post(`${api}${account}${updateInfo}`,data)
    .then((res)=>{
        console.log("-+->",res)
    })
    .catch((err)=>{
        console.log("err : ",err)
    })

}

export {  createAccount, loginAccount, changePassAccount,updateInfoAccount };