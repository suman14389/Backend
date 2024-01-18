// require('dotenv').config({'path': './env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();







// import express from "express";
// const app = express();
// (async function() {
//     try{

//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error)=> {
//             console.log("error in the app on: " , error );
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`app is running at the port ${process.env.PORT} `)
//         } )

//     } catch(error) {
//        console.log("error in catch :" , error);
//        throw error;
//     }

// }) ()