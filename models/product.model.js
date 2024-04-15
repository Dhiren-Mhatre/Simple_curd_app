const mongoose = require('mongoose');
const ProductSchema= mongoose.Schema(
  
  {
    name:{
      type:String,
      required:[true,"please enter product name"]
    },
    quantity:{
      type:Number,
      required:[true,"please enter quantity"],
      default:0
    },
    price:{
      type:Number,
      required:[true,"please enter price"],
      default:0
    },
    image:{
      type:String,
      required:false
    }
    
  },
  {
    timestamp:true
  }

);
const Product=  mongoose.model("Product",ProductSchema);
module.exports = Product;