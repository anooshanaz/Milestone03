import React from 'react'

const Card = () => {
  return (
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
    <div className='md-w-1/2 md:pr-10'>
    <h2 className='text-3xl font-bold mb-4 text-white'>Delicious Biryani</h2>
    <p className='text-white mb-4'>Order any 2 biryanis and get a complimentary dessert</p>
    <button className='bg-red-600 text-white text-sm font-semibold py-2 px-4 rounded-full shadow-lg hover hover:bg-amber-400 transition duration-300'>Order now</button>
    <h3 className='text-4x1 font-semibold mt-6 mb-2 text-center text-white'>Coming soon our new launches</h3>
    <ul>
        <li className='text-white'><strong className='text-red-400'>Hyderabadi Biryani</strong> to the flavorful Lucknowi and spicy Andhra Biryani—crafted with aromatic spices and tender meat, served fresh to tantalize your taste buds!"</li>
        <br />
        <li className='text-white'><strong className='text-red-400'>Karachi Biryani</strong> to the flavorful Lucknowi and spicy Andhra Biryani—crafted with aromatic spices and tender meat, served fresh to tantalize your taste buds!"</li>
        <br />
        <li className='text-white'><strong className='text-red-400'>Chicken Biryani</strong> to the flavorful Lucknowi and spicy Andhra Biryani—crafted with aromatic spices and tender meat, served fresh to tantalize your taste buds!"</li>
        <br />
        <li className='text-white'><strong className='text-red-400'>Chinese Biryani</strong> to the flavorful Lucknowi and spicy Andhra Biryani—crafted with aromatic spices and tender meat, served fresh to tantalize your taste buds!"</li>
        <br />
    </ul>
    </div>
    <div className='md:w-1/2 mt-6 md:mt-0'>
    <img
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfkWBowxoNZlMyOejsTT7QnoYyVDLu70g_w&s'
    alt='Biryani'
    className='w-full h-auto rounded-lg shadow-lg transition transform duration-500 ease-linear transform-hover:scale-105'/>
    </div>
    </section>
  )
}

export default Card
