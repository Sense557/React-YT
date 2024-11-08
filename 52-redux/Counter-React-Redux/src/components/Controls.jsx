import { useDispatch } from "react-redux";
import "../App.css";
import { useRef } from "react";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({ type: "ADD" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5 control-row">
        <input
          type="text"
          placeholder="Enter Number"
          className="number-input"
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrement}
        >
          Substract
        </button>
      </div>
    </>
  );
};

export default Controls;
