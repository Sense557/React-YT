import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  console.log("Got Items", items);  // You should now see the actual array of items

  return (
    <main>
      <div className="items-container">
        {items.length > 0 ? (
          items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    </main>
  );
};


export default Home; // This ensures Home is a default export