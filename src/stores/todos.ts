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
    todos: [] as Array<TodoItem>
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
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
    }
  },
});
