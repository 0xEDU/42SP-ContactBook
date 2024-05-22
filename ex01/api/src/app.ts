import express, { Express, Request, Response } from 'express';
import router from './routes/index'

const app: Express = express();
const port = 8080;

app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
