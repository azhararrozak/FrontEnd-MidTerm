/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CommentForm from "./CommentForm";

const VideosDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://midterm-backend.up.railway.app/api/videos/${id}`)
      .then((res) => setVideos(res.data))
      .catch((error) => console.log(error));
  }, [videos]);


  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="flex">
        <Link to="/" className="bg-blue-500 mx-2 hover:text-blue-300 mb-4 px-4 text-white rounded">Back</Link>
        <Link to={`/addproduct/${id}`} className="bg-blue-500 hover:text-blue-300 mb-4 px-4 text-white rounded">Add Product</Link>
      </div>
      <iframe
        width="560"
        height="315"
        src={videos.videoUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h3 className="font-bold">{videos.title}</h3>
      <p>{videos.description}</p>
      <div>
        <CommentForm id={id} />
        <h4>Comments:</h4>
        <ul>
          {videos.comments &&
            videos.comments.map((comment) => (
              <li className="border-b-4 pt-2" key={comment._id}><span className="font-bold">{comment.username}</span> | {comment.text}</li>
            ))}
        </ul>
      </div>
      <h4 className="mt-2 font-bold">Product List:</h4>
      <div className="mt-5 grid grid-cols-4 gap-2 justify-items-center w-[800px]`">
      {videos.products &&
            videos.products.map((product) => (
              <div key={product._id} className="w-[150px] h-[150px] bg-red-600 flex justify-center items-center">
                <p>{product.title}</p>
              </div>
            ))}
      </div>
      
    </div>
  );
};

export default VideosDetail;
