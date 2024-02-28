const mongoose=require("mongoose")
const connectDb=async()=>{
    try {
      //  mongoose.set("strictQuery",true)
        await mongoose.connect(process.env.URI)
        console.log("DB is running")
       
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDb