import express from 'express';
import { APP_PORT, APP_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } from './config';
import errorHandler from './middlewares/errorHandler';


const app = express();
import routes from './routes';

require ('./db/connectDB');


app.use(express.json());
app.use('/api', routes);

app.use(errorHandler);
app.use('/', (req, res, next) => {
    res.send(`
  <h1>Welcome to Near Photographer Rest APIs</h1>
  You may contact me <a href="https://socialtitli.com" target="_blank">here</a>
  Or You may reach out to me for any question related to this Apis: socialtitli@yahoo.com
  `);
});
const HOST = process.env.HOST || APP_HOST;
const PORT = process.env.PORT || APP_PORT;
app.listen(PORT, HOST, () => console.log(`
#######################################################
🛡️  Server listening on port: http://${HOST}:${PORT} 🛡️
#######################################################`));