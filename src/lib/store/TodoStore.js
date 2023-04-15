// id's for notes



import { v4 as uuid4 } from 'uuid';
import { writable } from 'svelte/store'
import { browser } from '$app/environment'

const data = browser ? JSON.parse(window.localStorage.getItem('st-todo-list')) ?? [] : [];

export const todos = writable(data);

todos.subscribe((value) => {
  if (browser) {
    localStorage.setItem('st-todo-list', JSON.stringify(value))
  }
})

export const addTodo = () => {
  todos.update((currentTod))
}