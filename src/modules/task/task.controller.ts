import { plainToInstance } from 'class-transformer';
import { Request, Response, Router } from 'express';
import { Routes } from '../../app.constants';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

const TaskController = {
  create(req: Request, res: Response) {
    const dto = plainToInstance(CreateTaskDto, req.body);

    const result = TaskService.create(dto);

    res.json(result);
  },
};

export const TaskRouter = Router();

TaskRouter.get(Routes.root, TaskController.create);
