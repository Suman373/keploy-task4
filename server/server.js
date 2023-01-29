const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json({limit:'30mb'}));
app.use(express.urlencoded({limit:'30mb', extended:true}));
app.use(cors());

// routes
app.get('/', (req,res)=>{
    res.send("Welcome to keploy task4 api");
})



// connection to mongodb
const connecToDB = async()=>{
    try {
         await mongoose.connect(process.env.MONGODB_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log(`Db connected successfully`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

connecToDB();

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
