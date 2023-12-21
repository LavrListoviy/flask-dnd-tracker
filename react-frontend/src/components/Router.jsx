import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainApp from "./screens/app/MainApp";
import Error404 from "./screens/error/404";
import ManageChars from "./screens/manage-characters/ManageChars";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainApp />} />
        <Route path="/manage-characters" element={<ManageChars />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
