import { useEffect, useState } from "react";
import axios from "axios";

interface ItemInterface {
  itemName: string;
  description?: string;
  price: number;
  id:number
}

export const useFetchAllItems = () => {
  const [items, setItems] = useState<ItemInterface[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      const backendURL = import.meta.env.VITE_BACKEND_URL;

      try {
        console.log("Fetching all items from:", backendURL);
        const response = await axios.get(`${backendURL}`);
        setItems(response.data.items); 
      } catch (error) {
        console.error("Error fetching items:", error);
        setError("Failed to fetch items.");
      } 
    };

    fetchItems();
  }, []);

  return { items, error }; 
};
