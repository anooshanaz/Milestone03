// pages/api/products.ts

import type { NextApiRequest, NextApiResponse } from 'next';

// Define a type for the product data
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const products: Product[] = [
    {
      id: 1,
      name: "Tikka Biryani",
      price: 250,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_e01dZKD7v6bX6yICzi-rqjGsebFxgMyD5Q&s",
    },
    {
      id: 2,
      name: "Chicken Biryani",
      price: 250,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYX1476NYI9dWDzZ5XzVwn15Ny3p3gYnYgsw&s", 
    },
    {
      id: 3,
      name: "Chiness Biryani",
      price: 250,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvDJ12Nnp160nBi1zQ3UGOCK3wQiCWm9YMA&s", 
    },
    {
      id: 4,
      name: "Tikka Biryani",
      price: 250,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvDJ12Nnp160nBi1zQ3UGOCK3wQiCWm9YMA&s", 
    },
    {
      id: 5,
      name: "Beaf Biryani",
      price: 300,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrE9OktrmO7R4J1MyPUoo5zLSidh-tYJDzMA&s",
    },
    {
      id: 6,
      name: "Hydrabadi Biryani",
      price: 300,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC52b9Onr-ZXTzDWML7oLJjp1E_y5kuRPkfg&s",
    },
  ];

  // Send the products as JSON response
  res.status(200).json(products);
}
