// main-shell.js
import { LitElement, html } from 'lit';
import { Router } from '@lit-labs/router';
import './components/todo-list.js';

export class MainShell extends LitElement {
  constructor() {
    super();
    this._router = new Router(this, [
      { path: '/', render: () => html`<todo-list filter="all"></todo-list>` },
      { path: '/active', render: () => html`<todo-list filter="active"></todo-list>` },
      { path: '/completed', render: () => html`<todo-list filter="completed"></todo-list>` },
    ]);
  }

  render() {
    return html`
      <nav>
        <a href="/">All</a> | 
        <a href="/active">Active</a> | 
        <a href="/completed">Completed</a>
      </nav>
      <hr>
      <main>${this._router.outlet()}</main>
    `;
  }
}

customElements.define('main-shell', MainShell);
