import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password:{ type: String, required: true }
  },{
      versionKey:false
  });
  
const UserModel = mongoose.model("user", userSchema);
  
export default UserModel;