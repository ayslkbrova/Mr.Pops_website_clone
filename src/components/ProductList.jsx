import React from 'react';
import Card from './Card';

const products = [
  {
    name: "Lemon Cheesecake",
    weight: "80g",
    price: "110",
    image: "https://data.mrpops.ua/assets/cache_image/media/product-preview/vanil-brauni_600x0_09a.png",
    link: "/en/catalog/lemon-cheesecake/"
  },
  {
    name: "Strawberry Delight",
    weight: "90g",
    price: "120",
    image: "https://example.com/image/strawberry.png",
    link: "/en/catalog/strawberry-delight/"
  }
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
