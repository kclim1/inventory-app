import { useAppDispatch } from "../store/hooks";
import { openDeleteModal } from "../store/slices/deleteModalSlice";

interface DeleteItemButtonProps {
  itemId: number; // ID of the item to delete
}

export const DeleteItemButton = ({ itemId }: DeleteItemButtonProps) => {
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    try {
      dispatch(openDeleteModal(itemId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
    >
      Delete
    </button>
  );
};
