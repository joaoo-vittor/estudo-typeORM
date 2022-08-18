import express, { Express } from 'express';
import { userRouter, productRouter } from '../routes/routes'

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
    this.app.use('/user', userRouter);
    this.app.use('/product', productRouter);
  }
}

export default new App().app;
