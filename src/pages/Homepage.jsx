import VideosCard from "../components/VideosCard";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";

const Homepage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("https://midterm-backend.up.railway.app/api/videosAll")
      .then((res) => setVideos(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
        <Header />
      <VideosCard videos={videos} />
    </div>
  );
};

export default Homepage;
