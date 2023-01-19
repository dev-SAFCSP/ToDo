import express from 'express';
import {create , login} from '../controller/user.controller';
import { registrationSchema } from '../zodSchema/user.schema';
import validate from '../middleware/validate';

const router = express.Router();

router.post('/',validate(registrationSchema),create);
router.post('/login', login);


export default router;