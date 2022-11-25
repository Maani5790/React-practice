import React from "react";
import Product from "./product";

const Home = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      {
        arr.map((i)=>{
            <Product value={i}  />
        })
      }
    </div>
  );
};

export default Home;
