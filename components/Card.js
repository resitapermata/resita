import React from "react";

function Card({ src, text }) {
  return (
    <div className="relative w-full h-[176px] overflow-hidden mb-2">
      <img className="w-full object-cover" src={src} alt="blabla " />
      <div className="absolute inset-x-0 bottom-0 bg-black text-white bg-opacity-50 flex justify-between items-center">
        <h5 className="px-[25px] py-[17px] text-[16px] font-bold sm:text-left">
          {text}
        </h5>
        <button class="flex items-center justify-center w-8 h-8 mr-2 text-black transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-pink-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
