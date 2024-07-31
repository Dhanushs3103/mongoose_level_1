//packages
import mongoose from "mongoose";


const URL = `mongodb://127.0.0.1:27017/Automobiles`;

const connection = mongoose.connect(URL);

export default connection;