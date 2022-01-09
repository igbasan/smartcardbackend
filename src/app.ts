import express, {Application, Request, Response} from 'express';
import authRouter from './routes/auth.route';
const app: Application = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// other app config stays here
app.use('/hospital',authRouter);

app.get('/', (req, res)=>{
    res.status(200).send('Server up and runing')
})



export default app;