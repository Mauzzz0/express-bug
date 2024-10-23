import express from 'express';
import { Routes } from './app.constants';
import { ErrorHandler } from './middlewares/error-handler';
import { TaskRouter } from './modules/task/task.controller';

export const port = 2000;

export const bootstrap = () => {
  const server = express();

  server.use(Routes.task, TaskRouter);
  server.use(ErrorHandler);

  server.listen(port, () => console.log(`Сервер запущен. Порт: ${port}`));

  return server;
};
