import React from "react";

const Button = (props) => {
  return (
    <button
      data-aos={props.aos}
      className={` font-bold text-lg leading-[21px] hover:bg-black  hover:text-[#02CDCF] border border-transparent hover:border-b-[#02CDCF] hover:border-t-[#02CDCF] rounded-xl text-[#0B0A0A] duration-300 font-Recharge bg-[#02CDCF] p-[18px_32px] ${props.custum}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
