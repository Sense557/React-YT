import styles from "./FoodInput.module.css";
const FoodInput = ({handleKeyDown}) => {

  return (
    <input
      className={styles.foodInput}
      type="text"
      placeholder="Enter Items Here"

      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
