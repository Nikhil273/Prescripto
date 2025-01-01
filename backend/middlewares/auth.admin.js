import e from 'express';
import jwt from 'jsonwebtoken';

//admin auth middleware

const authAdmin = (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) return res.status(401).json({ message: 'Unauthorized Access, Login Again', success: false });

    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ message: 'Unauthorized Access, Login Again', success: false });
    }
    next();


  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  };
};
export default authAdmin;