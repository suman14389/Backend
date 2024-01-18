import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async function() {
    try{
        const connectionResponse = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MONGODB connected ! ${connectionResponse.connection.host}`);

    } catch(error) {
        console.log("MONGOOSE error: ", error);
        process.exit(1);
    }
}

export default connectDB;