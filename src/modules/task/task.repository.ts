import { Task } from './task.types';

const storage: Task[] = [{ id: 1, name: 'example', description: 'example' }];

export const TaskRepository = {
  create(dto: Omit<Task, 'id'>) {
    const maxId = storage.sort((a, b) => a.id - b.id)[0]?.id ?? 0;

    storage.push({ ...dto, id: maxId + 1 });

    return storage[storage.length - 1];
  },
};
