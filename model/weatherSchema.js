
import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
  // Humidity: {
  //   type: String,
  //   required: true,
  // },
  // Wind: {
  //   type: String,
  //   required: true,
  // },
  // Tempreture: {
  //   type: String,
  //   required: true,
  // },
  // Pressure: {
  //   type: String,
  //   required: true,
  // },
  // WeatherType: {
  //   type: String,
  //   required: true,
  // },

  //   comments: {
  //     type: Array,
  //     default: [], //object,array of comment of that id
  //   },
});
const weather = mongoose.model("sensorreading", weatherSchema);
export default weather;

  