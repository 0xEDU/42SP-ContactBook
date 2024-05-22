import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 8080;

app.get('/v1/list-contacts', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/v1/create-contact', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server, but from post');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
