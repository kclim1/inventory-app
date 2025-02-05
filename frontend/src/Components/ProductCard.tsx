import { DeleteItemButton } from "./DeleteItemButton";


// Define interface for props
interface ProductCardProps {
  productName: string;
  description: string;
  price: number;
}
// include name , description , price as parameters
export const ProductCard = ({ productName, description, price }: ProductCardProps) => {
    // State for product name (initialized with prop)
//   const [productName, setProductName] = useState<string>(name);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-sm">
      <h2 className="font-semibold text-xl mb-2">Sample Product</h2>
      <p className="text-gray-600 truncate">Description here...</p>
      <div className="flex mt-4 justify-between items-center">
        <span className="text-gray-800 font-bold">$ 20.00</span>
        <div className="buttonContainer flex space-x-2 p-2">
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
            Edit
          </button>
          {/* import delete item button below */}
          <DeleteItemButton/>
        </div>
      </div>
    </div>
  );
};
