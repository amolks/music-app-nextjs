import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { addItemsinCart } from "../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SingleAlbumCard({title,album}) {

  const { name, singer, price } = album;
  const dispatch = useDispatch();
  const addToCart = (product)=>{
    dispatch(addItemsinCart(product))
  }

  return (
    <div className="bg-gray-800 p-4 rounded text-left">
        <div className="relative">
          <img src="https://via.placeholder.com/150" alt="Album" className="w-full rounded mb-2" />
          <div className="absolute bottom-0 right-0 p-2 flex space-x-2">
            <button className="bg-green-400 text-white rounded-full p-2 hover:bg-green-300 material-icons">
              library_add
            </button>
            <button   onClick={()=> addToCart(album)} className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 material-icons">
              add_shopping_cart
            </button>
          </div>
        </div>
        <p className="text-md font-bold">{title}</p>
        <p className="text-sm text-gray-400">By Singer: {singer}</p>
      </div>
  );
}
