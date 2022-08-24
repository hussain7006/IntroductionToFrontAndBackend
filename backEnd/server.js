const express = require('express')
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoute.js");
const cors = require("cors");

const app = express()

// mongodb+srv://hussain7006:<password>@cluster0.7nskjxk.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://hussain7006:<password>@cluster0.7nskjxk.mongodb.net/?retryWrites=true&w=majority


mongoose.connect("mongodb+srv://hussain7006:huzooor123@cluster0.7nskjxk.mongodb.net/?retryWrites=true&w=majority", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Mongo DB connection has been established");
    }
})


app.use(express.json());
app.use(cors());
app.use("/users", userRoute);

app.listen(5000)