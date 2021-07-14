import mongoose from "mongoose";

//establishing production and local db connection URL
let MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/blogsDevDatabase";

//to debug mongoose query issues
//mongoose.set('debug', true);

//use to make indexes in mongodb for faster queries
mongoose.set("useCreateIndex", true);

//for findByIdAndUpdate to have {new:true} as default
mongoose.set("returnOriginal", false);

//setting up mongoose connection and check for errors
mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((err) => console.error(`Error connecting to MongoDB: ${err.message}`));

//listen for mongodb disconnect
mongoose.connection.on("disconnected", () =>
  console.log(`Disconnected from MongoDB!`)
);

//listen for mongodb errors
mongoose.connection.on("error", (error) =>
  console.error(`MongoDB Connection Error: ${error}`)
);

//export connection
export default mongoose.connection;
