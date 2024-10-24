import { Task } from './task.types';

const storage: Task[] = [{ id: 1, name: 'example', description: 'example' }];

export const TaskRepository = {
  create(dto: Omit<Task, 'id'>) {
    const maxId = storage.reduce((max, task) => (task.id > max ? task.id : max), 0);
    const newTask = { ...dto, id: maxId + 1 };
    storage.push(newTask);
    return newTask;
  },
};
