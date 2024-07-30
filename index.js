import express from "express";
import mongoose from "mongoose"

let app = express();
let PORT = 3005;
let URL = `mongodb://127.0.0.1:27017/shoes`;

app.get("/",(req,res)=>{
    res.send("welcome to the server")
})


app.listen(PORT,async ()=>{
    console.log(`server is running at port ${PORT}`);
    await mongoose.connect(URL);
    console.log(`mongo db connected`);
})

function main() {
    
}


main();