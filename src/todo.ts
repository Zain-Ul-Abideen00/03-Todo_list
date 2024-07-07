// Logic for managing the todo list.

type Todo = {
    id: number;
    task: string;
    completed: boolean;
  };
  
  class TodoManager {
    private todos: Todo[] = [];
    private nextId: number = 1;
  
    add(task: string) {
      this.todos.push({ id: this.nextId++, task, completed: false });
    }
  
    remove(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  
    complete(id: number) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = true;
      }
    }
  
    list() {
      return this.todos;
    }
  }
  
  export default new TodoManager();
  