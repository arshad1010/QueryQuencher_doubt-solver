const mongoose=require("mongoose")

const url = 
    "mongodb+srv://skarsu74:MJXJEgJprzqF7AIW@cluster0.dh3rzx1.mongodb.net/?retryWrites=true&w=majority"

module.exports.connect=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log('MongoDB Connected')
    }).catch((error)=> console.log("Error : ",error))
}