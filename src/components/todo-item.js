import { css, html, LitElement } from "lit";
import { deleteTodo, toggleTodo } from "../store";

export class TodoItem extends LitElement {
  static properties = {
    index: { type: Number },
    todo: { type: Object },
    list: { type: Array },
  };

  static styles = css`
    li { 
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      padding: 10px;
      margin-bottom: 8px;
      background: #f9f9f9;
      color: #000;
      border-radius: 8px;
      animation: slideIn 0.3s ease-out forwards;
    }
    .completed { text-decoration: line-through; color: gray; opacity: 0.6; }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `
  constructor() {
    super();
  }

  render() {
    const { todo, index, list } = this;

    return html`
      <li>
        <div class="${todo.completed ? 'completed' : ''}">
          <input 
            type="checkbox" 
            ?checked="${todo.completed}" 
            @change="${() => toggleTodo(index, list)}"
          >
          ${todo.text}
        </div>
        <button
          style="background: none; color: red; border: none; font-weight: bold; cursor: pointer;"
          @click="${() => deleteTodo(index, list)}"
        >x</button>
      </li>
    `
  }
}

customElements.define('todo-item', TodoItem);
