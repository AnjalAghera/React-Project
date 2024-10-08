const jwt = require('jsonwebtoken');
const UserModel = require("../model/adminModel");
const adminauth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).send({ message: 'Unauthorized: Missing access token' });
      req.userInfo = user = null
    }
    const decoded = jwt.verify(token, "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikph");
    const user = await UserModel.findOne({ userName: decoded.userName });
    if (!user) {
      return res.status(401).send({ message: 'Unauthorized: Invalid token' });
      req.userInfo = user = null

    }
    req.userInfo = user
    next();
  } catch (err) {
    console.log("### auth error ###",err);
    res.status(401).send({ message: 'Unauthorized', error: err });
  }
};

module.exports = adminauth;
