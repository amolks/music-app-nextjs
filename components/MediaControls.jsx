import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MediaControls() {
  
  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 p-4 rounded-lg">
    <div className="flex items-center">
      <img
        src="https://via.placeholder.com/50"
        alt="Album Art"
        className="w-12 h-12 rounded"
      />
      <div className="ml-4 flex-grow">
        <p className="text-sm font-bold">Song Name</p>
        <p className="text-xs text-gray-400">Album Name</p>
        <p className="text-xs text-gray-400">By Singer</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="material-icons text-gray-300 hover:text-white">
          skip_previous
        </button>
        <button
          className="material-icons text-white bg-green-500 hover:bg-green-400 rounded-full p-2"
        >
          play_arrow
        </button>
        <button className="material-icons text-gray-300 hover:text-white">
          skip_next
        </button>
      </div>
    </div>

    <div className="mt-2">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs">00:00</span>
          </div>
          <div className="text-right">
            <span className="text-xs">04:30</span>
          </div>
        </div>
        <div className="overflow-hidden h-1 text-xs flex rounded bg-gray-700">
          <div
            style={{width: '30%'}}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
      </div>
    </div>
  </div>
  );
}
