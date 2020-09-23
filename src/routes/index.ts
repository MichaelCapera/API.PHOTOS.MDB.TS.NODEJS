import {Router} from 'express';
const router = Router();

import {createPhoto, getPhoto} from '../controllers/Photo.controllers'//funciones

import multer from '../libs/multer'

router.route('/photos')//ruta de Photos 
      .post(multer.single('image'),createPhoto)            
      .get(getPhoto)

export default router;