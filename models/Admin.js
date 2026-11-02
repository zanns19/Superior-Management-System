import mongoose from "mongoose";
const Adminschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    passwordHash:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
    },
},{
    timestamps:true
})
export default mongoose.models.Admin || mongoose.model("Admin",Adminschema)