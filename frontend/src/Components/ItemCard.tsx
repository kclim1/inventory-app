import { DeleteItemButton } from "./DeleteItemButton";
import { useAppDispatch } from "../store/hooks";
import { openCreateItemForm } from "../store/slices/createItemFormSlice";
import { setItemDetails } from "../store/slices/itemDetailsSlice";

interface ItemCardProps {
  itemName: string;
  description: string;
  price: number;
}

export const ItemCard = ({ itemName, description, price }: ItemCardProps) => {
  const dispatch = useAppDispatch();

  const handleEditClick = () => {
    // ✅ Dispatch action to pre-fill form with this item's details
    dispatch(
      setItemDetails({  itemName, description, price })
    );
    dispatch(openCreateItemForm()); // ✅ Open the form
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full my-2">
      <h2 className="font-semibold text-xl mb-2">{itemName}</h2>
      <p className="text-gray-600 truncate">{description}</p>
      <div className="flex mt-4 justify-between items-center">
        <span className="text-gray-800 font-bold">${price.toFixed(2)}</span>
        <div className="buttonContainer flex space-x-2 p-2">
          {/* ✅ Clicking this button pre-fills the form */}
          <button
            onClick={handleEditClick}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            Edit
          </button>
          <DeleteItemButton />
        </div>
      </div>
    </div>
  );
};
