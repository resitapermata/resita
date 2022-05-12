import React from "react";

function Card({ src, text }) {
  return (
    <div className="relative w-[311px] h-[176px] overflow-hidden mb-2 sm:max-w-md mx-auto">
      <img className="w-full object-cover" src={src} alt="blabla " />
      <div className="absolute inset-x-0 bottom-0 bg-black text-white bg-opacity-50 flex justify-between items-center">
        <h5 className="px-[25px] py-[17px] text-[16px] font-bold">{text}</h5>
        <button>
          {"->"}
          {/* <svg
            width="11px"
            height="11px"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.86863 4.20001L6.23432 1.5657C5.9219 1.25328 5.9219 0.746746 6.23432 0.434327C6.54674 0.121907 7.05327 0.121907 7.36569 0.434327L11.3657 4.43433C11.6781 4.74675 11.6781 5.25328 11.3657 5.5657L7.36569 9.5657C7.05327 9.87812 6.54674 9.87812 6.23432 9.5657C5.9219 9.25328 5.9219 8.74675 6.23432 8.43433L8.86863 5.80001H1.2C0.758174 5.80001 0.400002 5.44184 0.400002 5.00001C0.400002 4.55818 0.758174 4.20001 1.2 4.20001H8.86863Z"
              fill="#0B24FB"
            />
            <mask
              id="mask0_2_55"
              style="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="12"
              height="10"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.86863 4.20001L6.23432 1.5657C5.9219 1.25328 5.9219 0.746746 6.23432 0.434327C6.54674 0.121907 7.05327 0.121907 7.36569 0.434327L11.3657 4.43433C11.6781 4.74675 11.6781 5.25328 11.3657 5.5657L7.36569 9.5657C7.05327 9.87812 6.54674 9.87812 6.23432 9.5657C5.9219 9.25328 5.9219 8.74675 6.23432 8.43433L8.86863 5.80001H1.2C0.758174 5.80001 0.400002 5.44184 0.400002 5.00001C0.400002 4.55818 0.758174 4.20001 1.2 4.20001H8.86863Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_2_55)" />
          </svg> */}
        </button>
      </div>
    </div>
  );
}

export default Card;
