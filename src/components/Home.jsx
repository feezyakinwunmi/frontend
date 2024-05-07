//import {  useSelector } from "react-redux";
 import {useNavigate } from "react-router";
import React, { useState } from "react";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../slices/productsApi";
//import { convertRoutesToDataRoutes } from "@remix-run/router/dist/utils";
//import { useState } from "react/cjs/react.production.min";

const Home = () => {
  // const { items: products, status } = useSelector((state) => state.products);
    const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  //   console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
         navigate("/cart");
  };
  const [searchTerm, setSearchTerm] = useState("");
  // const [setData] = useState("")
  // const filtercat=(catitem)=>{
  //   const result=data.filter((product)=>{
  //     return product.category ===  catitem;
  //   });
  //   setData(result)

  // }

  return (
    <div className="home-container">
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <p>An error occured..</p>
      ) : (
        <>
          <header className="landingboard"></header>

          <h2 className="newa">New Arrivals</h2>
          <div className="fullcontainer">
            <div className="subnav">
              <input
                id="searchinput"
                type="text"
                placeholder="Search product"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <div className="catbox">
                  <h2>Category</h2>
                  <div className="twobox">
                     <div className="smallbox1">iphone</div>
                  <div className="smallbox2">Ladies Wear</div>
                  </div>
                 
                  <div className="smallbox3">Computer Gadgets</div>
                  <div className="twobox">
                     <div className="smallbox4">Laptop</div>
                  <div className="smallbox5">Shoe</div>
                  </div>
                 <div className="twobox"> <div className="smallbox6">Jewelry</div>
                  <div className="smallbox7">Phones</div></div>
                 


                  
                </div>
            </div>

            <div className="products">
              {data
                .filter((product) => {
                  if (searchTerm === "") {
                    return product;
                  } else if (
                    product.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return product;
                  }
                })
                .map((product) => (
                  <div key={product.id} className="product">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>

                    <span>{product.desc}</span>
                    <span className="price">${product.price}</span>

                    <button onClick={() => handleAddToCart(product)}>
                      Add To Cart
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}

      {/* {status === "success" ? ( */}

      {/* ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}  */}
    </div>
  );
};

export default Home;
