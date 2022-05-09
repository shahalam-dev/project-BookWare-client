import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddItem from "./components/AddItem/AddItem";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Books from "./components/Books/Books";
import Footer from "./components/Footer/Footer";
import LowStock from "./components/LowStock/LowStock";
import ManageInventories from "./components/ManageInventories/ManageInventories";
import MyItems from "./components/MyItems/MyItems";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Summary from "./components/Summary/Summary";
import UpdateStock from "./components/UpdateStock/UpdateStock";
import UserLogin from "./components/UserLogin/UserLogin";
import UserRegistration from "./components/UserRegistration/UserRegistration";

function App() {
  return (
    <div className="container">
      <Nav></Nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner></Banner>
              <Books></Books>
              <Summary></Summary>
              <LowStock></LowStock>
              <div style={{ marginTop: "200px" }}></div>
            </>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/inventory" element={<ManageInventories />} />
        <Route
          path="/add-item"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route
          path="/my-items"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route
          path="/update-stock/:id"
          element={
            <RequireAuth>
              <UpdateStock />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/password-reset" element={<ResetPassword />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <div style={{ marginTop: "200px" }}></div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
