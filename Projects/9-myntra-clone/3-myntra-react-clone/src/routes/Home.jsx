import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  console.log(items);

  return (
    <main>
      <div className="items-container">
        <HomeItem item={items[0]} />
      </div>
    </main>
  );
};

export default Home;
