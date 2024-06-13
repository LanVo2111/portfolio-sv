const multer  = require('multer');

//helper
const imageFilter = function(req, file, cb) {
  //accept image
  if(!file?.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    // req?.fileValidationError  = 'File is not an image file!';
    return cb(new Error('File is not an image file!'), false)
  }
  cb(null, false)
}

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now()+'_'+file?.originalname)
//   }
// });
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, __dirname + '/files');
  },
  filename: function (req, file, callback) {
    // You can write your own logic to define the filename here (before passing it into the callback), e.g:
    console.log(file.originalname); // User-defined filename is available
    const filename = `file_${crypto.randomUUID()}`; // Create custom filename (crypto.randomUUID available in Node 19.0.0+ only)
    callback(null, filename);
  }
})
const singleUpload = multer({
  storage: storage,
  limits: { fileSize: 1048576 },
  fileFilter: imageFilter
}).single("profile_pic");


const multipleUpload = multer({
    storage: storage, 
    limits: {fileSize: 1024  },
    fileFilter: imageFilter
}).array('profile_pic', 5);

module.exports = {
  singleUpload,
  multipleUpload
}









