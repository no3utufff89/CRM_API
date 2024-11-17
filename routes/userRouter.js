import Router from 'express';
import { createUser, deleteUserById, getUserById, getUsers } from '../controllers/userController.js';

const userRouter = new Router();

userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUserById);
userRouter.delete('/users/:id', deleteUserById);
userRouter.post('/users', createUser);

export default userRouter;