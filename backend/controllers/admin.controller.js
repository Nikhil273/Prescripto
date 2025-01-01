//API for adding doctor
import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from '../models/doctor.model.js';
import jwt from 'jsonwebtoken';


const addDoctor = async (req, res) => {
  try {
    const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
    const imageFile = req.file;

    // checking for all data to add doc
    if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
      return res.status(400).json({ message: 'All fields are required', success: false });
    };

    // validating email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email, Please Enter Valid Email', success: false });
    };

    //validating password
    if (password.length < 8) {
      return res.status(400).json({ message: 'Password should be atleast 8 characters long', success: false });
    };

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //upload img to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
    const imageUrl = imageUpload.secure_url;

    //add doctor to db
    const doctorData = {
      name,
      email,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      image: imageUrl,
      date: Date.now(),
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.status(201).json({ message: 'Doctor added successfully', success: true });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error', success: false });
  };
};


//Api for admin login

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ message: 'Admin Logged In', token, success: true });
    }
    else {
      res.status(400).json({ message: 'Invalid Credentials', success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error', success: false });
  }
};

export { addDoctor, loginAdmin }