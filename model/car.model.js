import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    fuelType: { type: String, required: true },
  },{
      versionKey:false
  });
  
const CarModel = mongoose.model("car", carSchema);
  
export default CarModel;