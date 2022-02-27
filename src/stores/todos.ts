import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

/*
The following pseudo code represents a todo item in a list.
TODO_ITEM {
  - ID: STRING // an UUID value
  - TEXT: STRING;
  - ADDED_AT: DATE;
  - MODIFIED_AT: DATE; // when created, this value will be the same as ADDED_AT
  - STATUS: { TODO, IN_PROGRESS, DONE }; // a simple enum, values represented as strings like 'TODO', etc.
  - OLD_STATUS: { TODO, IN_PROGRESS, DONE, null  if no old status present i.e. just added  };
}
*/

export interface TodoItem {
  id: string,
  text: string,
  addedAt: Date,
  modifiedAt: Date,
  status: string,
  oldStatus: string | null
}

export const useTodoStore = defineStore({
  id: "todos",
  state: () => ({
    todos: [] as Array<TodoItem>,
    currentEditItem: '',
    currentEditItemText: ''
  }),
  getters: {
    itemsTodo: (state) => state.todos.filter(item => item.status === 'TODO'),
    itemsInProgress: (state) => state.todos.filter(item => item.status === 'IN_PROGRESS'),
    itemsDone: (state) => state.todos.filter(item => item.status === 'DONE'),

    getItemById: (state) => {
      return (itemId: string) => state.todos.find(item => item.id === itemId)
    }
  },
  actions: {
    updateItem(itemId: string, newText: string) {
      // do nothing if we are given white space
      if (itemId.trim() === '') return

      // if the list is empty, then there is nothing to delete
      if (this.todos.length === 0) return

      // first, search for the item in the list
      let idx = this.todos.findIndex(item => item.id === itemId)

      // if the item was not found, then do nothing
      if (idx == -1) return

      // set the new text
      this.todos[idx].text = newText

      // modify the update timestamp
      this.todos[idx].modifiedAt = new Date()
    },

    clearCurrentEditItem() {
      this.currentEditItem = ''
      this.currentEditItemText = ''
    },

    setCurrentEditItem(itemId: string) {
      // do nothing if we are given white space
      if (itemId.trim() === '') return

      // if the list is empty, then there is nothing to delete
      if (this.todos.length === 0) return

      // first, search for the item in the list
      let idx = this.todos.findIndex(item => item.id === itemId)

      // if the item was not found, then do nothing
      if (idx == -1) return

      // set the current id
      this.currentEditItem = itemId

      // and set the value of the current edit text to be easy to access
      this.currentEditItemText = this.todos[idx].text
    },

    /**
     * Add a new todo item to the store.
     * 
     * @param text the text of the todo item
     */
    addTodoItem(text: string) {
      let currentDate = new Date()

      let newTodoItem = {
        id: uuidv4(),
        text: text,
        addedAt: currentDate,
        modifiedAt: currentDate,
        status: 'TODO',
        oldStatus: null
      }

      this.todos.push(newTodoItem)
    },

    /**
     * Search for the item in the todo list and if the item
     * is found, then it is removed. If the item is not found
     * it will do nothing.
     * @param itemId the item id to remove
     */
    deleteTodoItem(itemId: string) {
      // do nothing if we are given white space
      if (itemId.trim() === '') return

      // if the list is empty, then there is nothing to delete
      if (this.todos.length === 0) return

      // first, search for the item in the list
      let idx = this.todos.findIndex(item => item.id === itemId)

      // if the item was not found, then do nothing
      if (idx == -1) return

      // call the splice() function to remove the item
      // from the list
      this.todos.splice(idx, 1)
    },

    changeItemStatus(itemId: string, newStatus: string) {
      // do nothing if we are given white space
      if (itemId.trim() === '') return

      // if the list is empty, then there is nothing to delete
      if (this.todos.length === 0) return

      // must be a valid new status for the item
      if (newStatus != 'TODO' && newStatus != 'IN_PROGRESS' && newStatus != 'DONE') return

      // first, search for the item in the list
      let idx = this.todos.findIndex(item => item.id === itemId)

      // if the item was not found, then do nothing
      if (idx == -1) return

      // set the new status for the item
      this.todos[idx].status = newStatus

      // change modification date because we updated its status
      this.todos[idx].modifiedAt = new Date()
    }
  },
});
