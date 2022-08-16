import express, { Express, Request, Response } from 'express';
import AppDataSource from './infra/database/config/data-source';
import { Users } from './infra/database/entity/user';

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
    this.app.use('/user', async (req: Request, res: Response) => {
      try {
        const userRepo = AppDataSource.getRepository(Users);
  
        const result = await userRepo.save({ ...req.body });
  
        res.status(200).json({data: result});
      } catch (error) {
        console.log(error)
        res.status(500).end()
      }
    })
  }
}

export default new App().app;
