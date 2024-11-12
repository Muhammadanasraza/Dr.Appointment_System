import mongoose from "mongoose"



export default async function ConnectDb() {


    let connection

    if (connection.connection.readyState != 1) {

        connection = await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected")
    }



}


























