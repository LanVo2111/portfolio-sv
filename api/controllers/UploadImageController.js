"use strict";
const db = require("../db");

const multerConfig = require("../config/multer");
const multer = require("multer");

async function uploadSingleFile(req, res) {
  multerConfig.singleUpload(req, res, function (err) {

    if (err instanceof multer.MulterError) {
      return res.json(err.message);
    } 
    else if (err) {
      return res.json(err);
    } 
    else if (!req.file) {
      return res.json({
        image: req.file,
        msg: "Please select an image to upload",
      });
    }

    if (req.file) {
      return res.json({ msg: "uploaded", file: req.file });
    }
  });
}

async function uploadMultiPic(req, res) {
  if (req.file) {
    return res.json({ msg: "uploaded", file: req.file });
  }
}

module.exports = {
  uploadSingleFile,
  uploadMultiPic,
};
