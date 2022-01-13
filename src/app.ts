import express, {Application, Request, Response} from 'express';
import authRouter from './routes/auth.route';
import Cors from 'cors';

const app: Application = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// other app config stays here
app.use('/hospital',authRouter);
app.use(Cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


export default app;