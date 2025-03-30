const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./compass"); // Ensure correct filename

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("DB Connected"))
  .catch(err => console.error("DB Connection Error:", err));

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login Attempt:", email);
    
    const user = await EmployeeModel.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found!" });

    if (user.password !== password) return res.json({ success: false, message: "Invalid credentials!" });

    res.json({ success: true, user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/register", async (req, res) => { 
  try {
    console.log("Register Data:", req.body);
    const employee = await EmployeeModel.create(req.body);
    console.log("User Created:", employee);
    res.json(employee);
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.listen(3001, () => console.log("Server running on port 3000"));
