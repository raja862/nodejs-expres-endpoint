const express = require("express");
const router = express.Router();
const EmployeeModule = require("../modules/EmployeeModule");

router.get("/get",EmployeeModule.getEmployee);
router.put("/update/:id",EmployeeModule.updateEmployee);
router.post("/post",EmployeeModule.createEmployee);
router.delete("/delete/:id",EmployeeModule.deleteEmployee);

module.export=router;