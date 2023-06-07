const mongoose = require('mongoose');

// const mongoURI = "mongodb+srv://gofood:"+encodeURIComponent("#Sourav123") +"@cluster0.ocgonvs.mongodb.net/gofoodmern?retryWrites=true&w=majority";
const mongoURI = "mongodb+srv://gofood:Sourav123@cluster0.ocgonvs.mongodb.net/gofoodmern?retryWrites=true&w=majority";


const mongoDB =async () =>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true, useUnifiedTopology:true
    }).then(()=>{
        console.log('Connected');

    const foodItem =async()=>{
        const  fetched_data = await mongoose.connection.db.collection("food_items");
        
        // fetched_data.findOne().then(function(data){
            fetched_data.find({}).forEach((data)=> {
            // console.log(data);

        })
    }

    const foodCategory =async()=>{
        const  fetched_data = await mongoose.connection.db.collection("foodCategory");
        
        // fetched_data.findOne().then(function(data){
            fetched_data.find({}).forEach((data)=> {
                // console.log(data);
            
        })
    }
    
    foodItem();
    foodCategory();

    })
    .catch((err)=>{console.log(err);})
}

module.exports =mongoDB;