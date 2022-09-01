import express from 'express';
import { APP_PORT, APP_HOST, } from './config';
import errorHandler from './middlewares/errorHandler';
import path from 'path';


const app = express();
import routes from './routes';

require ('./db/connectDB');


global.appRoot = path.resolve(__dirname);
app.use(express.urlencoded({ extened : false }));

app.use(express.json());
app.use('/api', routes);

app.use(errorHandler);
const PORT = process.env.PORT || APP_PORT;
app.listen(PORT, HOST, () => console.log(`
#######################################################
🛡️  Server listening on port: http://localhost:${PORT} 🛡️
#######################################################`));