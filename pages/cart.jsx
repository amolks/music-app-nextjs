import Link from "next/link";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { removeItemsInCart } from "../Store/cartSlice";
import { useAuth } from './context/AuthContext';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Cart() {
    const albumsInCart = useSelector((state) => state.cart);
    const dispatchForRemovingItemFromCart = useDispatch()
    const removeItem = (id) => {
        dispatchForRemovingItemFromCart(removeItemsInCart(id))
    };

    const { user, loading, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [loading, user, router])

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return null;
    }

    const totalPrice = albumsInCart.reduce((total, album) => total + album.price, 0);
    // Calculate taxes (20% of the total price)
    const taxRate = 0.2;
    const taxAmount = totalPrice * taxRate;

    // Calculate grand total
    const grandTotal = totalPrice + taxAmount;


    const cards = albumsInCart.map((album, index) => (
        <div className="divide-y divide-gray-700">
            <div className="py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img src="https://via.placeholder.com/100" alt="Album" className="w-16 h-16" />
                    <div>
                        <p className="text-md font-bold">{album.name}</p>
                        <p className="text-xs text-gray-400">{album.singer}</p>
                        <p>${album.price}</p>
                    </div>
                </div>
                <div>
                    <input type="number" className="bg-gray-700 text-white rounded px-2 py-1 w-16" value="1" />
                </div>
                <button className="text-red-400 hover:text-red-300 material-icons" onClick={() => removeItem(album.id)}>
                    delete
                </button>
            </div>
        </div>
    ));

    return (
        <>

            <div >
                <div className="container mx-auto p-8 ">
                    <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

                    {cards}

                    <div className="mt-6">
                        <input type="text" className="bg-gray-700 text-white rounded px-2 py-1 w-1/2" placeholder="Enter Discount Code" />
                        <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300 ml-2">
                            Apply
                        </button>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-2xl font-bold">Summary</h2>
                        <div className="flex justify-between items-center">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Taxes</span>
                            <span>${taxAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center text-2xl font-bold">
                            <span>Grand Total</span>
                            <span>${grandTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="bg-green-400 text-white px-8 py-3 rounded hover:bg-green-300 w-full">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
