import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Request, Response, Router } from 'express';
import { Routes } from '../../app.constants';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

const TaskController = {
  create(req: Request, res: Response) {
    const dto = plainToInstance(CreateTaskDto, req.body);
    const errors = validateSync(dto);
    if (errors.length) {
      res.status(500);
    }
    const result = TaskService.create(dto);
    res.json(result);
  },
};

export const TaskRouter = Router();
TaskRouter.post(Routes.root, TaskController.create);
