import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Sales from "./pages/sales/Sales";
import Transactions from "./pages/transactions/Transactions";
import Reports from "./pages/reports/Reports";
import Mail from "./pages/mail/Mail";
import Feedback from "./pages/feedback/Feedback";
import Messages from "./pages/messages/Messages";
import Manage from "./pages/manage/Manage";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="pageContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
