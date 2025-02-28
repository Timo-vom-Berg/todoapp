interface Task {
  isTask: boolean;
  id: number;
  title: string;
}

const tasks: Task[] = [
  { title: "Todolist finish", isTask: false, id: 1 },
  { title: "Mathe 4gewinnt", isTask: false, id: 2 },
  { title: "Algo 1.0", isTask: false, id: 3 },
];

export default function TodoList() {
  const todoList = tasks.map((task) => <li key={task.id}>{task.title}</li>);
  // Filling an array

  return (
    <>
      <ul className="background">{todoList}</ul>
    </>
  );
}
