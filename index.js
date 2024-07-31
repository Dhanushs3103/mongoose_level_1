//packages
import express from "express";

//local imports
import connection from "./config/connect.db.js";
import carRouter from "./routes/car.routes.js";
import userRouter from "./routes/user.routes.js"

let server = express();
let PORT = 3005;

//middleware to parse the data.
server.use(express.json());
//parent router middleware for cars-http routes
server.use("/Cars", carRouter)
//parent router middleware for cars-http routes
server.use("/Users", userRouter)

// home route,
server.get("/", (req, res) => {
  res.send("welcome to the server");
});


server.listen(PORT, async () => {
  try {
    await connection;
    console.log("sever is running at port", PORT , "and connected to the database");
  } catch (error) {
    console.log(error);
  }
});
