const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
});

const EmployeeModel = mongoose.model("employee", EmployeeSchema);

module.exports = EmployeeModel;
