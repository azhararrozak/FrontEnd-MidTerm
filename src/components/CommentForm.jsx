/* eslint-disable react/prop-types */

import { useState } from "react";
import axios from "axios";

const CommentForm = ({ id }) => {
  const [comment, setComment] = useState({ text: "", username: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = `https://midterm-backend.up.railway.app/api/videos/${id}/comments`;

      const response = await axios.post(apiUrl, comment);

      console.log("API response:", response.data);

      setComment({
        text: "",
        username: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white w-[800px]">
      <div className="mb-4 mt-2 flex">
        <input
          type="text"
          id="username"
          name="username"
          value={comment.username}
          onChange={handleChange}
          className="w-1/4 border rounded p-2 mx-2"
          placeholder="Type Username"
          required
        />
        <input
          type="text"
          id="text"
          name="text"
          value={comment.text}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Type Your Comment"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white mx-2 px-2 rounded hover:bg-blue-700"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
