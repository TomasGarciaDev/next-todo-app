import TodoList from "@/components/TodoList";
import db from "@/utils/db";

const getData = async () => {
  const todos = await db.todo.findMany({});

  console.log("TODOS", todos);

  return todos;
};

const TodosLayout = async () => {
  const todos = await getData();
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosLayout;
