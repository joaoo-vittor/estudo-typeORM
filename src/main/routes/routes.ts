import { Users } from '../../infra/database/entity/user';
import { Products } from '../../infra/database/entity/product';
import { Router, Request, Response } from 'express';
import AppDataSource  from '../../infra/database/config/data-source'

const userRouter = Router();
const productRouter = Router();

userRouter.post('/create', async (req: Request, res: Response) => {
  try {
    const userRepo = AppDataSource.getRepository(Users);

    const result = await userRepo.save({ ...req.body });

    res.status(200).json({data: result});
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
})

userRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const userRepo = AppDataSource.getRepository(Users);

    const result = await userRepo.findOneBy({ id: +req.params.id });

    res.status(200).json({data: result});
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
})

userRouter.get('/:id/products', async (req: Request, res: Response) => {
  try {
    const userRepo = AppDataSource.manager.getRepository(Users);

    const result = await userRepo.find({ 
      relations: {
        products: true,
      },
      where: {
        id: +req.params.id
      }
    })

    res.status(200).json({data: result});
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
})

productRouter.post('/create', async (req: Request, res: Response) => {
  try {
    const productRepo = AppDataSource.getRepository(Products);

    const result = await productRepo.save({ ...req.body });

    res.status(200).json({data: result});
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
})

productRouter.get('/:user_id', async (req: Request, res: Response) => {
  try {
    const productRepo = AppDataSource.getRepository(Products);

    const result = await productRepo.find({ where: {user_id: +req.params.user_id} });

    res.status(200).json({data: result});
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
})

export {
  userRouter,
  productRouter
}

