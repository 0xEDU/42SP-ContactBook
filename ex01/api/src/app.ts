import express, { Express } from 'express';
import router from './router'

const app: Express = express();
const port = 8080;

app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
