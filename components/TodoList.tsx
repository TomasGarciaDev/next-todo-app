import Todo from "./Todo";

const TodoList = ({ todos }: any) => {
  return (
    <div>
      {todos.map((todo: any) => (
        <Todo id={todo.id} content={todo.content} />
      ))}
    </div>
  );
};

export default TodoList;
