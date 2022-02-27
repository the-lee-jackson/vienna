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
      this.todos.push({
        id: uuidv4(),
        text: text,
        addedAt: currentDate,
        modifiedAt: currentDate,
        status: 'TODO',
        oldStatus: null
      })
    },
  },
});