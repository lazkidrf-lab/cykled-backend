const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true 
    },
    contactName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    projectDescription:{
        type:String,
        required:true
    },
    phone:{
      type:String,
      required:true
    }
});
const project = mongoose.model("project", projectSchema);
module.exports = project;



