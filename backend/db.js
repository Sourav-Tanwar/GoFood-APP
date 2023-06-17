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
            const food_data_array =[];
            fetched_data.find({}).forEach((data)=> {
                food_data_array.push(data)
                // console.log(data);
                // global.food_items = data;
                // console.log(global.food_items)

        })
        global.food_items = food_data_array;
    }

    const foodCategory =async()=>{
        const  fetched_data = await mongoose.connection.db.collection("foodCategory");
        
        const Category_data_array =[];
        // fetched_data.findOne().then(function(data){
            fetched_data.find({}).forEach((data)=> {
                // console.log(data);
                Category_data_array.push(data)
        })
        global.food_category = Category_data_array;
    }
    
    foodItem();
    foodCategory();

    })
    .catch((err)=>{console.log(err);})
}

module.exports =mongoDB;