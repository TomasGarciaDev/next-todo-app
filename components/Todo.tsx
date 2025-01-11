const Todo = ({ content, id }: { content: any; id: any }) => {
  return <div key={id}>{content}</div>;
};

export default Todo;
