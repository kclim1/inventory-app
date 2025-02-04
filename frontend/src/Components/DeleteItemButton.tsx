import axios from "axios";

interface DeleteItemButtonProps {
  itemId: string; // ID of the item to delete
  onDelete: (id: string) => void; // Callback function after deletion
}

export const DeleteItemButton = ({ itemId, onDelete }: DeleteItemButtonProps) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL 

  const handleClick = async () => {
    try {
      const response = await axios.delete(`${backendURL}/api/items/${itemId}`);
    //   remove after testing 
      console.log("Item deleted:", response.data);

      // Call onDelete function to update UI (e.g., remove item from state)
      onDelete(itemId);
    } catch (error) {
      console.error("Error deleting item:", error);
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
