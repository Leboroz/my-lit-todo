// store.js (Final Polish)
import { signal, computed } from "@preact/signals-core";

export const todos = signal([
  { text: "Learn Lit", completed: true },
  { text: "Divorce React", completed: false }
]);

export const filteredTodos = (filter) => computed(() => {
  if (filter === 'active') return todos.value.filter(t => !t.completed);
  if (filter === 'completed') return todos.value.filter(t => t.completed);
  return todos.value;
});

export const addTodo = (text) => {
  todos.value = [...todos.value, { text, completed: false }];
};

export const toggleTodo = (index, filteredList) => {
  const itemToToggle = filteredList[index];
  todos.value = todos.value.map(t =>
    t === itemToToggle ? { ...t, completed: !t.completed } : t
  );
};

export const deleteTodo = (index, list) => {
  const itemToDelete = list[index];
  todos.value = todos.value.filter((t) => t != itemToDelete);
}
