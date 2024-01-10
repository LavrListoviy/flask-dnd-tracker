import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainApp from "./screens/app/MainApp";
import Error404 from "./screens/error/404";
import ManageChars from "./screens/manage-characters/ManageChars";
import Header from "./ui/header/Header";
import SideMenu from "./ui/aside-menu/SideMenu";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <SideMenu />
      <div>
      <Routes>
        <Route index element={<MainApp />} />
        <Route path="/manage-characters" element={<ManageChars />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
