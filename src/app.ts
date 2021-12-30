import express, {Application, Request, Response} from 'express';
import authRouter from './auth/auth.route';
const app: Application = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// other app config stays here
app.use('/hospital',authRouter)


export default app;