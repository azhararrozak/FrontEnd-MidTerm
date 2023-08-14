
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import VideosDetail from "./components/VideosDetail";
import AddPage from "./pages/AddPage";
import EditedPage from "./pages/EditedPage";
import AddProductPage from "./pages/AddProductPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} exact/>
        <Route path="/add" element={<AddPage />} />
        <Route path="/videos/:id" element={<VideosDetail />} />
        <Route path="/edited/:id" element={<EditedPage />} />
        <Route path="/addproduct/:id" element={<AddProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
