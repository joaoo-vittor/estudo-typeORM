import express, { Express, Request, Response } from 'express';

class App {
  readonly app: Express;

  constructor () {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares () {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes () {
    this.app.use('/', (req: Request, res: Response) => {
      res.json({msg: "Hello world"});
    })
  }
}

export default new App().app;
