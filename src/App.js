import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWether } from "./store/wetherSlice";

import "./App.css";
import WetherList from "./components/WetherList";

function App() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchWether());
  }, [dispatch]);

  return (
    <div className="App">
      {status === "Loading" && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      {status === "resolved" && <WetherList />}
    </div>
  );
}

export default App;
