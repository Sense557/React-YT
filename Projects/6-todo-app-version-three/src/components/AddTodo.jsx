import { RiAddLargeLine } from "react-icons/ri";
import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    
    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Text Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <RiAddLargeLine />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
