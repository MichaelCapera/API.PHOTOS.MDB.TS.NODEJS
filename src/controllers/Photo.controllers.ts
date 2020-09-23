import {Request, Response} from 'express'
import Photo from '../models/Photo';

export function getPhoto(req: Request, res: Response){
    

}

export async function createPhoto(req: Request, res: Response){//función crear foto
   const{title, description} = req.body;
   const newPhoto = {
      title: title,
      description: description,
      imagePath: req.file.path
    
   };
   const photo = new Photo(newPhoto);
   await photo.save();
   
   return res.json({
       message:'photo sucessfully saved', //devuelve un json
       photo
   })

}