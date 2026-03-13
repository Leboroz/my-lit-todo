import { html, LitElement } from "lit";

export class TodoItem extends LitElement {
  static properties = {
    list: { type: Array },
    todo: { type: Object },
    index: { type: Number },
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
  `
  render() {
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
          style="background: none; color: red; border: none; font-weight: bold;"
          @click="${() => deleteTodo(index, list)}"
        >x</button>
      </li>
    `
  }
}

customElements.define('todo-item', TodoItem);
