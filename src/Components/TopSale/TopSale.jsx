import React from "react";
import Card2 from "../Card/Card2";
import { Link } from "react-router-dom";
import sofa2 from '../.././assets/ProductImage/sofa2.jpg'
import bed2 from '../.././assets/ProductImage/bed2.jpg'
import light3 from '../.././assets/ProductImage/light3.jpg'
import dining2 from '../.././assets/ProductImage/dining2.jpg'
import sofa3 from '../.././assets/ProductImage/sofa3.jpg'
import dining4 from '../.././assets/ProductImage/dining4.jpg'
import { useState } from "react";
import { useEffect } from "react";

const TopSale = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    fetch("https://weero-furniture-server.onrender.com/api/product/get-products")
        .then(res => res.json())
        .then(data => setProducts(data.data))
}, [])
  return (
    <div>
      <h1 className="text-3xl font-semibold text-primary my-10">
        Top Sale Product
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {
          products.slice(0,9).map((product) => <Card2 key={product._id} product={product} /> )
        }
      </div>
      <div className="flex justify-center">
        <Link to="/shop">
          <button className="bg-primary hover:bg-gray-800 duration-300 px-5 py-2 text-secondary rounded-md">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopSale;
