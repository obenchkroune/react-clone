export const Todos = () => {
  const todos: Todo[] = [
    {
      id: "1",
      content: "Todo 1",
      completed: false,
    },
  ];

  const handleSubmit = (e: JSX.SyntheticEvent) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>save</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
};

type Todo = {
  id: string;
  content: string;
  completed: boolean;
};

export const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <li>
      <span key={todo.id}>{todo.content}</span>
    </li>
  );
};
