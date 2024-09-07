import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { addItemsinCart } from "../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
export default function AlbumCard({ album }) {
  const { name, singer, price } = album;
  const router = useRouter();
  const dispatch = useDispatch();
  const addToCart = (product)=>{
    dispatch(addItemsinCart(product))
  }
  return (
          <div className="bg-gray-800 p-4 rounded relative">
            <div className="relative">
             <Link href={`/album/${album.id}`}>
             <img
                src="https://via.placeholder.com/150"
                alt="Album"
                className="w-full rounded mb-2"
              />
              </Link>
              <button
                className="absolute bottom-2 right-2 bg-green-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-300"
              >
                <span className="material-icons text-white"> play_arrow </span>
              </button>
            </div>
            <div className="text-left">
              <h3 className="text-md font-bold text-white mb-1">{name}</h3>
              <p className="text-sm mb-2 text-gray-400">By Singer: {singer}</p>
              <p className="text-sm mb-2 text-green-200">${price}</p>

              <button
                onClick={()=> addToCart(album)}
                className="inline-flex items-center text-green-400 hover:text-green-300"
              >
                <span className="material-icons"> shopping_cart </span>
                <span className="ml-1">Add to Cart</span>
              </button>
            </div>
          </div>

  );
}
