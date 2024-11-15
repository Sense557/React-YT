import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
    .then((res) => res.json())
    .then((response) => {
      console.log("Fetched Items", response.items); // Log the array inside the response object
      dispatch(itemsActions.addInitialItems(response.items)); // Dispatch only the array part (response.items)
    })
    .catch((error) => {
      console.error("Error fetching items:", error);
    });
  
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      <div>
        Fetch Done: {fetchStatus.fetchDone}
        Currently Fetching: {fetchStatus.currentlyFetching}
      </div>
    </>
  );
};

export default FetchItems;
