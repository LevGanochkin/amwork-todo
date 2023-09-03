import { FC, useEffect, useState } from 'react';
import Header from '../../components/header';
import { List } from '../../components/styled-components/List';
import ToDoCard from '../../components/todo/card';
import axios from 'axios';
import { ITodo } from '../../models';

interface ToDoListProps {}

const ToDoList: FC<ToDoListProps> = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const fetchTodos = async () => {
    const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);
  return (
    <>
      <Header count={todos.length} />
      <List>
        {todos.map((item) => (
          <ToDoCard key={item.id} completed={item.completed} title={item.title} />
        ))}
      </List>
    </>
  );
};

export default ToDoList;
