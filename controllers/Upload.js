const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const app = express();

const mongoURI =
  "mongodb+srv://ParentsPortal:parents1234@portalcluster.jgx1x.mongodb.net/portal?retryWrites=true&w=majority";

const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gfs;

conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("upload");
});

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

function Upload(req, res) {
  res.json({
    file: req.file,
  });
}

const getAllFiles = (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "No files  found",
      });
    }
    return res.json(files);
  });
};

const previewFile = (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file  found",
      });
    }
    if (file.contentType === "application/msword") {
      const readstream = gfs.createReadStream(file.filename);
      console.log("hello");
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "not found",
      });
    }
  });
};

module.exports = {
  upload: upload,
  Upload: Upload,
  getAllFiles: getAllFiles,
  previewFile: previewFile,
};
