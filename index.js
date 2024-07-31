//packages
import express from "express";

//local imports
import connection from "./config/connect.db.js";
import carRouter from "./routes/car.routes.js";

let server = express();
let PORT = 3005;

server.use(express.json());

server.use("/Cars", carRouter)

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
