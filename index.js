
import categoryRouter from './routes/categoryRouter.js';
import userRouter from './routes/userRouter.js';
import { app, startApp } from './server/startServer.js';


// Маршруты
app.use('/', userRouter);
app.use('/', categoryRouter);

// Запуск сервера
startApp();

