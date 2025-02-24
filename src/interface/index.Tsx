export type IPriority = 'low' | 'medium' | 'high';
export type IStatus = 'to-do' | 'in-progress' | 'done';

export interface ITask {
  title: string;
  description: string;
  dueDate: Date;
  priority: IPriority;
  status: IStatus;
}
