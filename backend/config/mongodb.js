import mongoose, { connect } from "mongoose";

const connectDB = async () => {

  mongoose.connection.on("connected", () => console.log("Connected to MongoDB"));
  await mongoose.connect(`${process.env.MONGO_URI}/prescripto`, {
    family: 4,
  });
};

export default connectDB;