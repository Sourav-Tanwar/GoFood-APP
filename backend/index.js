const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT
const mongoDB = require("./db")
const cors = require("cors");


mongoDB();

// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:5000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Orgin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// })

app.use(cors());
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));

app.get('/', (req, res) => {
  res.send('Hello World! --------')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})