export interface Todo {
  id: number;
  content: string;
}

export type Action =
  | { type: "CREATE"; data: Todo }
  | { type: "DELETE"; id: number };
