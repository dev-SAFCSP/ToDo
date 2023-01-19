import express from 'express';
import {create, findAllByUser, update, deleteById} from '../controller/task.controller';
import { createSchema, updateSchema, deleteSchema } from '../zodSchema/task.schema';
import validate from '../middleware/validate';
import auth from '../middleware/auth';

const router = express.Router();

router.get('/',auth,findAllByUser);
router.post('/',auth,validate(createSchema),create);
router.put('/:id',auth,validate(updateSchema),update);
router.delete('/:id',auth,validate(deleteSchema),deleteById);


export default router;