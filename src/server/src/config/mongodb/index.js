
const mongoose = require('mongoose');

const url = 'mongodb+srv://heavenofbook:admin123123@cluster0.s7xcxya.mongodb.net/test'
const url1 = 'mongodb://localhost:27017'
const url2= 'mongodb+srv://jiji:vy123456789@cluster0.3lmkjug.mongodb.net/?retryWrites=true&w=majority'

async function connect(){
    try{
        await mongoose.connect(url, {
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