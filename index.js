import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import express from "express";
const app = express();

import connectDB from "./db/connect.js";

import weather from "./model/weatherSchema.js";

app.use(cors());

app.get("/", function (request, response) {
  response.send("Weather API");
});

app.get("/weather",async (req,res)=>{
    const weatherData = await weather.find({});
    
  console.log(weatherData);
res.status(200).json(weatherData[weatherData.length - 1]);
})
55655
const port =   process.env.PORT || 3005;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
