import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { addItemsinCart } from "../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

  

export default function HeroDetail({album}) {
  
  const { name, singer, price } = album;
  const router = useRouter();
  const dispatch = useDispatch();
  const addToCart = (product)=>{
    dispatch(addItemsinCart(product))
  }

  return (
    <div className="relative">
    <img
      src="https://via.placeholder.com/1920x500"
      alt="Album"
      className="w-full"
    />
    <div className="absolute top-4 left-4">
      <h1 className="text-4xl font-bold text-white">{name}</h1>
    </div>
    <div className="absolute bottom-4 right-4 flex items-center space-x-4">
      <button
       onClick={()=> addToCart(album)}
        className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300"
      >
        Add to Cart
      </button>
      <button
        className="material-icons text-green-400 hover:text-green-300 text-3xl"
      >
        play_arrow
      </button>
    </div>
  </div>

  );
}
