/*eslint-disable*/
var mongoose=require('./mongoose');
var schemaProduct=new mongoose.Schema({
    name:{
    type:String,
    require:true,
},
    price:{
    type:Number,
    require:true,
}
})
var Product=mongoose.model("Product",schemaProduct); 
module.exports=Product;