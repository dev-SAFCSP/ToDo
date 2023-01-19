import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

const validate = (schema: AnyZodObject) =>
 (req: Request,res: Response,next:NextFunction)=>{
     try{
         schema.parse({
             body: req.body,
             params: req.params
         });
         next();
     }catch(e){
         let zodError = e as ZodError;
        //  console.log(zodError.issues[0].message);
         return res.status(400).json({msg: zodError.errors[0].message});
     }
 }



 export default validate;