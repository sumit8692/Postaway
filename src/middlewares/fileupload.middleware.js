import multer from 'multer';


const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/uploads/');
    },
    filename: (req, file, cb) => {
        const name = Date.now() + "-" + file.originalname;
        cb(null, new Date().toISOString() + file.originalname);
    },
})


export const upload = multer({
    storage: storageConfig,
});