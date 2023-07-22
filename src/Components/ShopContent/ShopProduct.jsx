import React from 'react';
import Card from '../Card/Card';
import { useState } from 'react';
import { useEffect } from 'react';

const ShopProduct = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(()=>{
    fetch('jsonData/product.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[products])
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {
              products.slice(0,9).map((product) => <Card product={product} />)
            }

            </div>
        </>
    );
};

export default ShopProduct;