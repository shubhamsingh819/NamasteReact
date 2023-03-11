import { useState , useEffect } from "react";
import { FETCH_MENU_URL } from "../src/config";
const useRestaurent = (id) => {
  const [restaurant, setRestaurent] = useState(null);

  useEffect(() => {
    getRestaurentInfo();
  }, []);

  const getRestaurentInfo = async () => {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setRestaurent(json.data);
  };

  return restaurant;
};

export default useRestaurent;
