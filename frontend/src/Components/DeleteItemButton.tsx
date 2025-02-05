import axios from "axios";
import { useAppDispatch } from "../store/hooks";
import { openDeleteModal } from "../store/slices/deleteModalSlice";

interface DeleteItemButtonProps {
  itemId: string; // ID of the item to delete
  onDelete: (id: string) => void; // Callback function after deletion
}

export const DeleteItemButton = ({ itemId, onDelete }: DeleteItemButtonProps) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useAppDispatch();

  const handleClick = () => {

    console.log("Delete button clicked!");
    dispatch(openDeleteModal());
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
