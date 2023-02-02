import express,{Application} from 'express';
import userRouter from './routes/user.route';
import taskRouter from './routes/task.route';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config()

const app:Application = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use('/users',userRouter);
app.use('/tasks',taskRouter);

app.listen(port, ()=>{
    console.log(`Application running on port ${port}`)
});
