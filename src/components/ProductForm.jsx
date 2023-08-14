/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

const ProductForm = ({ id }) => {
  const [product, setProduct] = useState({
    linkProduct: "",
    title: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = `https://midterm-backend.up.railway.app/api/videos/${id}/products`;

      const response = await axios.post(apiUrl, product);

      console.log("API response:", response.data);

      setProduct({
        linkProduct: "",
        title: "",
        price: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-[800px]">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={product.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold mb-1">
          Link Produk
        </label>
        <input
          type="text"
          id="linkProduct"
          name="linkProduct"
          value={product.linkProduct}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="videoUrl" className="block font-semibold mb-1">
          Price
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
