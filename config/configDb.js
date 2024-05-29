import mongoose from "mongoose";

export const connectDb=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(
            "Database connected successfully host : ",
            conn.connection.host
        );
        return;
    }catch(error){
        console.log("Database couldn't connect",error);
    }

    
}
export default connectDb;
