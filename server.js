const express = require('express');
const cors = require("cors");

const app=express();

app.use(express.json());
app.use(cors());

const apiRoutes=require("./routes/apiRoutes");
app.use(apiRoutes);

app.listen(8003, () => {
    console.log("Server is started "+8003)
})