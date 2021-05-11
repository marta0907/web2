/*eslint-disable*/
var Product = require('./Product');
var cors = require('cors')
var express=require('express'); 
var app=express();
const corsOptions ={
    origin:'http://localhost:4200', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/src')); 
//app.get('/',function(req,res){ res.sendFile(__dirname+'/src/index.html');

app.get('/getproducts',function(req,res){ 
    Product.find(function(err,data){
    console.log(data);
    res.send(data);
})
})
app.post('/addproduct',function(req,res){ console.log(req.body);
    var user=new Product(req.body); 
    user.save(function(err,data){
             if(err) console.log(err.message);
             console.log(data);
             res.send('add product!');
    })
})

app.post('/removeproduct',function(req,res){ 
    console.log(req.body); 
    Product.remove({_id:req.body.id},function(err,data){
    res.send('remove product');
})
})
app.listen(process.env.PORT||7777); console.log('server is run!');