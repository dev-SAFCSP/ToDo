import {Request, Response} from 'express';
import prisma from '../config/db';
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';


export const create = async (req:Request, res:Response) =>{
    const hash = await argon2.hash(req.body.password);
    try{
        const user = await prisma.user.create({
            data:{
                name:req.body.name,
                email: req.body.email,
                password: hash
            }
        });
        if(user){
            res.status(200).json({msg:"user created!"})
        }
    }catch(e){
        res.status(500).json({msg:`Error: ${e}`});
    }
}


export const login = async (req:Request, res:Response)=>{

    const user = await prisma.user.findUnique({
        where:{
            email: req.body.email
        }
    });

    if(!user){
        return res.status(400).json({Error:"Wrong email adress"});
    }else if(!await argon2.verify(user.password, req.body.password)){
        return res.status(400).json({Error:"Wrong password"});
    }

    const token = jwt.sign({
        id: user.id,
        name: user.name,
        role: user.role
    }, process.env.JWT_SECRET as string, {
        expiresIn: '5h'
    });
    return res.status(200).json({
        message:`Hello ${user.name}`,
        token: token
    });

}
