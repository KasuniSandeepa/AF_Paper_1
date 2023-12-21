const express = require("express");
const router = express.Router();
const controller = require("../controllers/subject.controller");

module.exports = function(){
    router.get("/", controller.getAllSubjects);
    router.post("/create", controller.createSubject);
    return router;
}