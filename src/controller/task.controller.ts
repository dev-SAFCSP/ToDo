import {Request, Response} from 'express';
import prisma from '../config/db';

export const create = async (req:Request, res:Response) =>{
    try{
        const task = await prisma.task.create({
            data:{
                title:req.body.title,
                userId: req.body.userId
            }
        });
        if(task){
            res.status(200).json({msg:"task created!"})
        }
    }catch(e){
        res.status(500).json({msg:`Error: ${e}`});
    }
}

export const findAllByUser = async (req:Request, res:Response) =>{
    try{
        const tasks = await prisma.task.findMany({
            where: {
                userId: parseInt(req.params.id) //User id
            }
        });
        res.status(200).json(tasks)
    }catch(e){
        res.status(500).json({msg:`Error: ${e}`});
    }
}

export const update = async (req:Request, res:Response) =>{
    try{
        const updatedTasks = await prisma.task.updateMany({
            where:{
                id: parseInt(req.params.id), //Task id
                userId: req.body.userId
            },
            data:{
                title: req.body.title,
                isCompleted: req.body.isCompleted
            }
        });
        if(updatedTasks.count == 0){
            throw("No Task Updated");
        }
        res.status(200).json({msg:"task updated!"});
        
    }catch(e){
        res.status(500).json({msg:`Error: ${e}`});
    }
}

export const deleteById = async (req:Request, res:Response) =>{
    try{
        const deletedTasks = await prisma.task.deleteMany({
            where:{
                id: parseInt(req.params.id), //Task id
                userId: req.body.userId
            }
        });
        if(deletedTasks.count == 0){
            throw("No Task Deleted");
        }
        res.status(200).json({msg:"task deleted!"});
        
    }catch(e){
        res.status(500).json({msg:`Error: ${e}`});
    }
}