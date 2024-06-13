"use strict";
var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
const multer  = require('multer');
var path = require('path');

module.exports = function (app) {

  // app.use(express.json({limit:'50mb'})); 
  app.use(bodyParser.json({limit: '500mb'}));

  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: '500mb',
      parameterLimit: 50000,
    }),
  );
  const upload = multer({ dest: 'files/' });

  let resumeExperCtrl = require("./controllers/ExperienceController");
  let resumeSoftCtrl = require("./controllers/SoftController");
  let resumeWorkCtrl = require("./controllers/WorkSkillController");
  let inforUserCtrl = require("./controllers/InforUserController");
  let imageController = require("./controllers/UploadImageController")

  // todoList Routes
  app.route("/experience").get(resumeExperCtrl.get);
  app.route("/experience/:id").get(resumeExperCtrl.delete);

  app.route("/soft-skill").get(resumeSoftCtrl.get);

  app.route("/work-skill").get(resumeWorkCtrl.get);

  app.route("/user").get(inforUserCtrl.get);

  // app.route('/image-upload').post(imageController.singleUpload)
  // router.post('/single-picture-upload', imageController.uploadSingleFile);

  // router.post('/multiple-picture-upload', multerConfig.uploadSingleFile, imageController.uploadMultiPic);

  app.route('/upload').post(upload.any(), imageController.uploadSingleFile)
};
