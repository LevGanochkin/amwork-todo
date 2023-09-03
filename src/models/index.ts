export interface Response {
  data: ITodo[];
}

export interface ITodo {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;
}
