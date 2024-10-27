import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const initialTodoItems = [];

  let [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (itemName, itemDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };


  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
