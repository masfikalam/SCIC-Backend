const multer = require("multer");

// file rename
module.exports.config = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./public/uploads");
    },
    filename: function (req, file, callback) {
      const ext = file.mimetype.split("/")[1];
      const rename = `${file.fieldname}_${Date.now()}.${ext}`;
      callback(null, rename);
    },
  }),
});

// file upload
module.exports.upload = function (req, res, next) {
  const location = req.file.path.replaceAll("\\", "/");
  res.json({ file: `${req.get("host")}/${location}` });
};
