import { useSelector } from "react-redux";


useEffect(() => {

  const controller = new AbortController();
  const signal = controller.signal;

  setFetching(true);
  fetch("https://dummyjson.com/posts", { signal })
    .then((res) => res.json())
    .then((data) => {
      addInitialPosts(data.posts);
      setFetching(false);
    });
  return () => {
    console.log("Cleaning Up useEffect");
    controller.abort();
  };
}, []);


const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return <>
    <div>
      Fetch Done: {fetchStatus.fetchDone}
      Currently Fetching: {fetchStatus.currentlyFetching}
    </div>
  </>;
};

export default FetchItems;
