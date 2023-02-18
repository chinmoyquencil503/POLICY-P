var express = require("express");
var router = express.Router();

const SignUp = require("../model/User");
const jwt = require("jsonwebtoken");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("SignUp validation failed")) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "quencil@", {
    expiresIn: maxAge,
  });
};
/* GET users listing. */

router.get("/", (req, res, next) => {
  res.render("index", { title: "login route" });
});
router.post("/hr", async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await SignUp.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({
      message: "HR login successful",
      user: user._id,
      role: user.role,
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
});

router.post("/recruiter", async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await SignUp.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({
      message: "HR login successful",
      user: user._id,
      role: user.role,
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
});

router.get("/employee", async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await SignUp.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({
      message: "HR login successful",
      user: user._id,
      role: user.role,
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
});
module.exports = router;
