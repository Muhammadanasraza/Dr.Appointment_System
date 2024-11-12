import mongoose from "mongoose";


export default async function connectDb() {
    let connection;
    if (connection?.connection?.readyState != 1) {
        connection = mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");
    }



}
// connect(process.env.MONGODB_URL)

























