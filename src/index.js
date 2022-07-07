const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");

const itemMasterController = require("./controller/items.controller")
const app = express();

app.use(cors());
app.use(express.json());

app.use("", itemMasterController);


const port = 3000; 


app.listen(port, async() => {
    try{
        await connect()
        console.log(`Server is running on port ${port}`);
    }
    catch(err){
        console.log(err);
    }
})

