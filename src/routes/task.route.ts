import express from 'express';
import {create, findAllByUser, update, deleteById} from '../controller/task.controller';

const router = express.Router();

router.get('/:id',findAllByUser);
router.post('/',create);
router.put('/:id',update);
router.delete('/:id',deleteById);


export default router;