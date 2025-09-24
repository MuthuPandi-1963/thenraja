import mongoose from "mongoose"


const DbConnect = async()=>{
    try {
        const res = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database Connected successfully ",res.connection.host);
        
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}

export default DbConnect;