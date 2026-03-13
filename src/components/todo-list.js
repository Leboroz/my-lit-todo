import { LitElement, html, css } from 'lit';
import { SignalWatcher } from '@lit-labs/preact-signals';
import { todos, addTodo, filteredTodos } from '../store.js';
import './todo-item.js';

export class TodoApp extends SignalWatcher(LitElement) {
  static styles = css`
:host { font-family: sans-serif; display: block; padding: 20px; max-width: 400px; }
  
  ul { list-style: none; padding: 0; }


  input[type="text"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 70%;
  }

  button {
    padding: 8px 16px;
    background: #646cff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  `;

  static properties = {
    filter: { type: String }
  };

  constructor() {
    super();
    this.filter = 'all';
  }

  _handleAdd() {
    const input = this.renderRoot.querySelector('#new-todo');
    if (input.value) {
      addTodo(input.value);
      input.value = '';
    }
  }

  _handleKeyUp(e) {
    if (e.key === 'Enter') {
      const input = e.target;
      const val = input.value.trim();

      if (val) {
        addTodo(val);
        input.value = '';
      }
    }
  }

  render() {
    // We use the filtered list from our store
    const list = filteredTodos(this.filter).value;

    return html`
      <h1>My Vanilla Stack Todo</h1>
      <div>
        <input id="new-todo" type="text" placeholder="What needs doing?" @keyup="${this._handleKeyUp}">
        <button @click="${this._handleAdd}" >Add</button>
      </div>

      <ul>
        ${list.map((todo, index) => html`
        <todo-item .todo="${todo}" .index="${index}" .list="${list}"/>
        `)}
      </ul>
      
      <small>Total: ${list.length}</small>
    `;
  }


}

customElements.define('todo-list', TodoApp);
