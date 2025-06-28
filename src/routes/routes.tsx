import { Routes, Route } from "react-router";
import App from "../App";
import Blog from "../pages/Blog";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;