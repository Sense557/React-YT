import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);
  const fetchStatus = useSelector((store) => store.fetchStatus); // Access fetchStatus from the store

  return (
    <>
      {fetchStatus.currentlyFetching ? (
        <p>Loading...</p> // Show loading while data is being fetched
      ) : (
        <div className="items-container">
          {items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
