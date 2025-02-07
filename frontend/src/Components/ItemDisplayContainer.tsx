import { ItemCard } from "./ItemCard";
import { useFetchAllItems } from '../utils/useFetchAlltems';

export const ItemDisplayContainer = () => {
  const { items,  error } = useFetchAllItems(); 

  return (
    <div className="itemContainer flex flex-col bg-sky-200 p-4 overflow-y-auto my-2 h-screen">
      {error && <p className="text-center text-red-500">{error}</p>}
      {items.length > 0 ? (
        items.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            itemName={item.itemName}
            description={item.description ?? ""}
            price={item.price ?? 0}
          />
        ))
      ) : (
        <p className="text-center text-gray-700">No items available.</p>
      )}
    </div>
  );
};
