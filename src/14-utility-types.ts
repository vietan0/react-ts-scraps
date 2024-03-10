// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Pick and Omit
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
type TodoPreview2 = Omit<Todo, "title" | "completed">;

// String Manipulation
// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
type Greeting = "Hello, world";
type ShoutyGreeting = Uppercase<Greeting>;
