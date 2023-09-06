//node js

//import the node modules
//@express  @cors  @mongodb
//require() function used to import the modules
const express=require("express");
const cors=require("cors");
const mongodb=require("mangodb");

//create the rest object
const app=express();
//where "app" is the rest object
//where "app" object used to develop the rest api's

//enable the cors policy
app.use(cors());

//set the "json" mime type
app.use(express.json());

//create the client object
//client object used to connect to the database
const Giggada = mongodb.mongoClient;
//where "ashokIT" is the client Object


//rest api
app.get("/userdata",(req,res)=>{
    Giggada.connect("mongodb+srv://admin:admin@cluster0.y1iqear.mongodb.net/userAccount?retryWrites=true&w=majority"
    , (err,connection)=>{

        if(err) throw err;
        else{
            const db= connection.db("userAccount");
            db.connection("userdata").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    })

});



//Assign the port number
app.listen(8080,()=>{
          console.log("node server running on port number 8080")
});
