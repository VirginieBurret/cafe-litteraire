  
const mongoose = require('mongoose');
const {schema} = mongoose.Schema;

const { isEmail, isNumeric, isAlphanumeric } = require('validator');


const userSchema = new mongoose.Schema({ 
    
    username:{
        
        type:String,
        required:true,
        unique:true,
        trim:true,
    },

    email:{
        validate:[isEmail],  
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    age:{
        
        type:Number,
        required:true,
    },
    
    password:{
        type:String,
        required:true
        
    },

},

   {
     timestamps: true, 
   }
);

const User = mongoose.model("User", userSchema)
module.exports = User