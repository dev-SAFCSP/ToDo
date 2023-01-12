import {Request, Response} from 'express';
import prisma from '../config/db';


export const create = async (req:Request, res:Response) =>{
    try{
        const user = await prisma.user.create({
            data:{
                name:req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        });
        if(user){
            res.status(200).json({msg:"user created!"})
        }
    }catch(e){
        res.status(500).json({msg:`Error: ${e}`});
    }
}
