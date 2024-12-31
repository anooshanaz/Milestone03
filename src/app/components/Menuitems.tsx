'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import ProductCard from "./Productcard"
import { Product } from "@/pages/type"

const Menuitems = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [cart, setCart] = useState<Product[]>([])
    const [showCart, setShowCart] = useState(false)
    const [isCheckout, setIsCheckout] = useState(false)
    const router = useRouter()

    // Fetch products and load cart from localStorage
    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch(`/api/products`)
            const data = await response.json()
            setProducts(data)
        }
        fetchProducts()

        // Load cart from localStorage
        const savedCart = localStorage.getItem("cart")
        if (savedCart) {
            setCart(JSON.parse(savedCart))
        }
    }, [])

    // Add product to the cart
    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product]
            localStorage.setItem("cart", JSON.stringify(updatedCart))
            return updatedCart
        })
    }

    // Toggle cart visibility
    const toggleCart = () => {
        setShowCart((prev) => !prev)
    }

    // Proceed to checkout
    const goToCheckout = () => {
        setIsCheckout(true)
    }

    // Clear cart
    const clearCart = () => {
        setCart([])
        localStorage.removeItem("cart")
    }

    return (
        <div className="relative min-h-screen py-6">
            <div className="relative z-10">
                <div className="max-w-6xl mx-auto text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-4">Delicious Biryani In Our Menu</h1>
                </div>

                {/* Product Section */}
                <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                            onAddToCart={addToCart}
                        />
                    ))}
                </div>

                {/* Cart Section */}
                <div className="max-w-6xl mx-auto mt-8">
                    <button
                        onClick={toggleCart}
                        className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
                    >
                        {showCart ? 'Hide Cart' : `View Cart (${cart.length} items)`}
                    </button>

                    {showCart && (
                        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-4xl font-bold mb-4 text-blue-900">Your Cart includes:</h2>

                            {cart.length > 0 ? (
                                <div>
                                    <ul>
                                        {cart.map((product, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center justify-between mb-6 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                                            >
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-20 h-40 sm:w-24 inline-block transition-transform duration-300 ease-in-out transform hover:scale-110 text-black"
                                                />
                                                <span className="ml-4 text-lg font-medium text-slate-600">
                                                    {product.name} - ${product.price}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex justify-between items-center mt-6 text-black">
                                        <span className="font-semibold text-xl">
                                            Total: ${cart.reduce((total, product) => total + product.price, 0)}
                                        </span>
                                        <div>
                                            <button
                                                onClick={goToCheckout}
                                                className="bg-green-600 py-3 px-6 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-110 text-white"
                                            >
                                                Proceed To Checkout
                                            </button>
                                            <button
                                                onClick={clearCart}
                                                className="bg-red-600 py-3 px-6 rounded-lg text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-110 text-white ml-4"
                                            >
                                                Clear Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-lg text-slate-600">Your Cart Is Empty</p>
                            )}
                        </div>
                    )}
                </div>

                {/* Checkout Section */}
                {isCheckout && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50 text-black min-h-screen">
                        <div className="bg-white p-8 rounded-lg w-full h-auto sm:w-96">
                            <h2 className="text-4xl font-bold text-blue-600 mb-4">CheckOut</h2>
                            <p className="text-lg text-red-600">Please confirm your order before proceeding!</p>
                            <div className="mt-4">
                                <ul>
                                    {cart.map((product, index) => (
                                    <li key={index} className="flex justify-between mb-4">
                                        <span>{product.name}</span>
                                        <span>${product.price}</span>
                                    </li>
                                    ))}
                                </ul>
                                <div className="flex justify-between mt-4">
                                    <span className="font-semibold">Total:</span>
                                    <span className="font-bold">${cart.reduce((total, product) => total + product.price, 0)}</span>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-between">
                                <button
                                    onClick={() => setIsCheckout(false)}
                                    className="bg-red-600 py-3 px-6 rounded-lg text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-110 text-white ml-4">
                                    Close
                                </button>
                                <button
                                    onClick={() => alert("Order Confirm ... Will Deliver At Your Door Step!")}
                                    className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-110">
                                    Confirm Order
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Menuitems
