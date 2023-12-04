import expreess, { Router } from "express";
import multer from 'multer';
import {
    createStudentController,
    loginStudentController,
    updateStudentController,
    validateEmailIfExistController,
    updatePasswordByEmailController,
    getStudentByIdController,
    getAllStudentsController
} from "../dependencies";

export const studentRouter = Router();

// Configuración de Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/image/'); // Carpeta donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
        // Genera un nombre único para el archivo
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });


studentRouter.post('/', upload.single('url_img'), createStudentController.execute.bind(createStudentController));
studentRouter.post('/login', upload.none(), loginStudentController.execute.bind(loginStudentController));
studentRouter.post('/recovery', upload.none(), validateEmailIfExistController.execute.bind(validateEmailIfExistController));
studentRouter.put('/recovery/password', upload.none(), updatePasswordByEmailController.execute.bind(updatePasswordByEmailController));
studentRouter.put('/:id', upload.single('url_img'), updateStudentController.execute.bind(updateStudentController));
studentRouter.get('/:id', upload.none(), getStudentByIdController.execute.bind(getStudentByIdController));
studentRouter.get('/', upload.none(), getAllStudentsController.execute.bind(getAllStudentsController));
