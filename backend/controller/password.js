const asyncHandler = require("express-async-handler");
const Password = require("../models/password");
const password = require("../models/password");

const pass = asyncHandler(async (req, res) => {
  const {password} = req.body;
  console.log(req.body)
  if (!req.body) {
    res.status(403).json({
      status: "forbidden",
      message: "body can not be empty",
    });
  }
  if (!password) {
    res.status(403).json({
      status: "forbidden",
      message: "field is empty",
    });
  }
  const passCreated = await Password.create({
    Password: password,
  });
  if (passCreated) {
    res.status(202).json({

      data: "password created",
    });
  }
});

module.exports = { pass };
