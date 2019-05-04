const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

router.post("/upload", multer(multerConfig).single("file"), (req, res) => {
  return res.json({
    filename: req.file.filename,
    path: req.file.path,
    size: req.file.size
  });
});

module.exports = router;
