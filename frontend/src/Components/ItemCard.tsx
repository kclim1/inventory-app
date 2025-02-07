import { DeleteItemButton } from "./DeleteItemButton";
import { useAppDispatch } from "../store/hooks";
import { openCreateItemForm } from "../store/slices/createItemFormSlice";
import { setItemDetails } from "../store/slices/itemDetailsSlice";

interface ItemCardProps {
  itemName: string;
  description: string;
  price: number;
  readonly id: number;
}

export const ItemCard = ({ itemName, description, price , id}: ItemCardProps) => {
  const dispatch = useAppDispatch();

  const handleEditClick = () => {
    dispatch(
      setItemDetails({  itemName, description, price , id})
    );
    dispatch(openCreateItemForm()); 
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full my-2 transition-all duration-300 hover:shadow-lg hover:scale-101">
      <h2 className="font-semibold text-xl mb-2">{itemName}</h2>
      <p className="text-gray-600 truncate">{description}</p>
      <div className="flex mt-4 justify-between items-center">
        <span className="text-gray-800 font-bold">${price}</span>
        <div className="buttonContainer flex space-x-2 p-2">
          {/* Clicking this button pre-fills the form */}
          <button
            onClick={handleEditClick}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            Edit
          </button>
          <DeleteItemButton itemId={id} />
        </div>
      </div>
    </div>
  );
};
