
const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb+srv://heavenofbook:admin123123@cluster0.s7xcxya.mongodb.net/test',{
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