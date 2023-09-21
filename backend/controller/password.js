const asyncHandler = require("express-async-handler");
const Password = require("../models/password");
const password = require("../models/password");

const pass = asyncHandler(async (req, res) => {
  const {Passw} = req.body;
  if (!req.body) {
    res.status(403).json({
      status: "forbidden",
      message: "body can not be empty",
    });
  }
  if (!Passw) {
    res.status(403).json({
      status: "forbidden",
      message: "field is empty",
    });
  }
  const passCreated = await Password.create({
    Password: Passw,
  });
  if (passCreated) {
    res.status(202).json({
      status: "successful",
      message: "password created",
    });
  }
});

module.exports = { pass };
