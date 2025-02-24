import mongoose from "mongoose";

async function connectDb() {
    const {MONGO_URI} = process.env;

    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connection to MongoDB : Success');
    }
    catch(err) {
        console.log('Connection to MongoDB : Fail !');
        console.log(err);
        
        throw err;
    }
    
    return mongoose.connection;
}
connectDb();

