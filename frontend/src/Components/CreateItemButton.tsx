import { useAppDispatch } from "../store/hooks";
import { openCreateItemForm } from "../store/slices/createItemFormSlice";


export const CreateItemButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={()=>dispatch(openCreateItemForm())}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
    >
      + Create Item
    </button>
  );
};
