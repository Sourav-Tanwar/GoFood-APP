const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://gofood:"+encodeURIComponent("#Sourav123") +"@cluster0.ocgonvs.mongodb.net/?retryWrites=true&w=majority";


const mongoDB =async () =>{
    await mongoose.connect(mongoURL,{useNewUrlParser:true, useUnifiedTopology:true
    },).then(()=>{console.log('Connected');})
    .catch((err)=>{console.log(err);})
}

module.exports =mongoDB;