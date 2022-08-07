import express from 'express';
import { APP_PORT, APP_HOST, APP_URL } from './config';

const app = express();
import routes from './routes';

app.use('/api', routes);

app.use('/', (req, res, next) => {
    res.send(`
  <h1>Welcome to Near Photographer Rest APIs</h1>
  You may contact me <a href="https://socialtitli.com" target="_blank">here</a>
  Or You may reach out to me for any question related to this Apis: socialtitli@yahoo.com
  `);
});
const HOST = process.env.HOST || APP_HOST;
const PORT = process.env.PORT || APP_PORT;
app.listen(PORT, HOST, () => console.log(`Listening on port http://${HOST}:${PORT}`));