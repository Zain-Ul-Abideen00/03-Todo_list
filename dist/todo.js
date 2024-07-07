// Logic for managing the todo list.
class TodoManager {
    todos = [];
    nextId = 1;
    add(task) {
        this.todos.push({ id: this.nextId++, task, completed: false });
    }
    remove(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
    complete(id) {
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
