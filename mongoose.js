/*eslint-disable*/
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Marta:09.07.2001@mydb.peoo1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'); 
console.log("mongodb connect...")
module.exports=mongoose;