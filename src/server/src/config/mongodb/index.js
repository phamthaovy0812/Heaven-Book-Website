
const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/AccountDatabase',{
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