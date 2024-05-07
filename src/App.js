import "./App.css";
import { BrowserRouter, Route,Routes,  } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";import Cart from "./components/Cart";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./slices/authSlice";
//import CheckoutSuccess from "./components/CheckoutSuccess";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Routes>       <Route path="/cart" element={<Cart/>} ></Route>    
            <Route path="/" exact element={<Home/>} ></Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} /></Routes>
           
            
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
