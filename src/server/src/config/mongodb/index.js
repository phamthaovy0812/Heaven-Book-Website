
const mongoose = require('mongoose');

const url = 'mongodb+srv://heavenofbook:admin123123@cluster0.s7xcxya.mongodb.net/test'
const url1 = 'mongodb://localhost:27017/AccountDatabase'

async function connect(){
    try{
        await mongoose.connect(url1, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect success')
    }
    catch(err){
        console.log('Error connecting')
    }
}

module.exports = {connect}