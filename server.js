const express = require("express");
const mongoose = require("mongoose");
const project = require("./models/Project");
const app = express();
app.use(express.json());
// endpoint
app.post("/api/projects", async (req,res) =>{    
try{
    const Project = await  project.create(req.body);
    res.status(201).json({
        message: "Project created successfully",
        project :Project
});

}  catch (error){
    res.status(400).json({
        message: "Error creating Project",
        error:error.message

    });
    }
});
//get total number of client 
app.get("/api/projects/count", async (req, res) => {
  try {
    const count = await project.countDocuments();

    res.status(200).json({
      message: "Total clients retrieved successfully",
      totalClients: count
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting client count",
      error: error.message
    });
  }
});
// GET PROJECT BY EMAIL
app.get("/api/projects/:email", async (req, res) => {
  try {
    const foundProject = await project.findOne({
      email: req.params.email
    });

    if (!foundProject) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    res.status(200).json({
      message: "Project retrieved successfully",
      project: foundProject
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting project",
      error: error.message
    });
  }
});
// TEST ENDPOINT
app.get("/", (req, res) => {
  res.send("Server is working!");
});

// CONNECT TO MONGODB
app.get("/", (req, res) => {
    res.send("Server is working!");
});

mongoose.connect("mongodb://127.0.0.1:27017/cykled")
.then(()=> {
console.log("mongodb connected successfully");
})
.catch((error) => {
console.log("mongodb connection error:",error);
});
const port = 4000;
app.listen(4000,() =>{

console.log("cykled server is running on port 4000");



});
