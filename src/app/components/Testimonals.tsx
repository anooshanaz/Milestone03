import React from "react";

const Testimonals = () => {
  const products = [
    {
      id: 1,
      title: "Biryani 1",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlJi1_W92MH54CGL_xn7veW9S99VsnMRl7w&s", 
    },
    {
      id: 2,
      title: "Biryani 2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMpi3VF_Nam3S_2TftSpURJOplqXO7nM0WQ&s", 
    },
    {
      id: 3,
      title: "Biryani 3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYX1476NYI9dWDzZ5XzVwn15Ny3p3gYnYgsw&s", 
    },
    {
      id: 4,
      title: "Biryani 4",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvDJ12Nnp160nBi1zQ3UGOCK3wQiCWm9YMA&s", 
    },
    {
      id: 5,
      title: "Biryani 5",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RQ2_bEWrTS1JXKtyIwbucYmkXLao3jE2nQ&s", 
    },
    {
      id: 6,
      title: "Biryani 6",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ496RXf2_-T0bg7d8WVNbxKBfw4fU6J4Z4Wg&s", 
    },
    {
      id: 7,
      title: "Biryani 7",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvDJ12Nnp160nBi1zQ3UGOCK3wQiCWm9YMA&s", 
    },
    {
      id: 8,
      title: "Biryani 8",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMKP-jwTS0VW2nmZ8wvLQcekNmcy02nIDtg&s", 
    },
    {
      id: 9,
      title: "Biryani 9",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUYOflzZW3-P48589DhmbgwlcT-1y3vGR5A&s", 
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 rounded-lg shadow-lg bg-cyan-200 max-w-sm mx-auto"
        >
          <img
            src={product.image}
            alt={product.title}
            width={350}
            height={350}
            className="w-250 h-60 object-cover rounded-lg"
          />
          <h2 className="text-xl font-bold mt-2 text-center">{product.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Testimonals;

