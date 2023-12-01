const express= require("express");
const dotenv = require('dotenv');
const colors = require ('colors');
const  morgan = require ('morgan');
const cors = require('cors');
const { connectDB } = require("./config/db");

//dot congig
dotenv.config();

//Mongodb Connection
connectDB();

//rest Object
const app = express();

// middleWares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));



//routes
//1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
//register || login
app.use('/api/v1/auth',require('./routes/authRoutes'));
app.use('/api/v1/inventory',require('./routes/inventoryRoutes'));

//Port 
const PORT= process.env.PORT || 8080;


//Listen 
app.listen(PORT,()=>{
    console.log(`Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
     .bgBlue.white
     );
});