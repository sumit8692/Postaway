import multer from 'multer';

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload/');
    },
    filename: (req, file, cb) => {
        const datePart = new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-');
        cb(null, datePart + '-' + file.originalname);
    },
});

export const upload = multer({
    storage: storageConfig,
});
