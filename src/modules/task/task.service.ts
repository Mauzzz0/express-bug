import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from './task.repository';

export const TaskService = {
  create(dto: CreateTaskDto) {
    return TaskRepository.create(dto);
  },
};
