import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import Header from "../components/Header";

const AddProductPage = () => {
  const { id } = useParams();
  return (
    <div>
        <Header />
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="font-bold text-xl uppercase">Adding Product Data</h1>
      <ProductForm id={id} />
      </div>
    </div>
  );
};

export default AddProductPage;
