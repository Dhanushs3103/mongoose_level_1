//packages
import mongoose from "mongoose";
import express from "express";

//local imports
import CarModel from "../model/car.model.js";

const carRouter = express.Router();

// route to get data
carRouter.get("/get-data", async (req, res) => {
    try {
     // getting data from database.
      let carData = await CarModel.find();
      // checking if the data is available or not.
      if (carData.length <= 0) {
        return res.status(200).json({ message: "No data available" });
      }
      // sending the data.
      res.status(200).json({ message: "Data received successfully", data: carData });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving data");
    }
  });
  
  
  //route to post data,
  carRouter.post("/add-car", async (req, res) => {
    try {
      //destructuring the req.body.
      let { name, brand, price, fuelType } = req.body;
      // adding data to database
      let newCar = CarModel({
        name,
        brand,
        price,
        fuelType,
      });

      //saving the data in database.
      await newCar.save();

      // sending the response as data received successfully.
      res.status(201).json({
        message: "New car added to the database",
        car: newCar,
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  // route to replace data,
  carRouter.put("/replace-car/:id", async (req, res) => {
    try {
      //destructuring the id
      let { id } = req.params;
      // data from the user.
      let newData = req.body;
      // updating the car by Id.
      await CarModel.findByIdAndUpdate({ _id: id }, newData,{ new:true});
      // sending response
      res.status(201).json({
        message: `Car with id ${id} replaced with new car successfully`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error replacing car data");
    }
  });
  
  // route to update data,
  carRouter.patch("/update-car/:id", async (req, res) => {
    try {
      //destructuring the id
      let { id } = req.params;
      // data from the user.
      let newData = req.body;
      // updating the car by Id.
      await CarModel.findByIdAndUpdate({ _id: id }, newData,{ new:true});
       // sending the response
      res.status(201).json({
        message: `Car with id ${id} updated successfully`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error updating car data");
    }
  });
  
  // route to delete data,
  carRouter.delete("/delete-car/:id", async (req, res) => {
    try {
      let { id } = req.params; //destructuring the id
      // finding by id and deleting the car
      await CarModel.findByIdAndDelete(id);
      // sending the response
      res.status(200).json({
        message: `Car with id ${id} deleted successfully`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error deleting car");
    }
  });


  export default carRouter;