import express from 'express';
import {create} from '../controller/user.controller';

const router = express.Router();

router.post('/',create);


export default router;