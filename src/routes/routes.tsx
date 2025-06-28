import { Routes, Route } from "react-router";
import App from "../App";
import Blog from "../pages/Blog";
import PostPage from '../pages/PostPage'


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/post/:slug" element={<PostPage />} />
    </Routes>
  );
};

export default AppRoutes;