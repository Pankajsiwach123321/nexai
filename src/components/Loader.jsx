import React from "react";

const Loader = () => {
  return (
    <div>
      <div className=" min-h-screen fixed top-0 left-0 bg-black z-[100] w-full flex flex-col gap-5 justify-center items-center">
        <h1 className=" animate-bounce font-Recharge font-normal text-[75px] leading-[91%] text-center drop-shadow-[0px_6px_0px_#000]">
          <span className="text-[#02CDCF]">N</span>
          <span className="text-white">e</span>
          <span className="text-[#02CDCF]">x</span>
          <span className="text-white">a</span>
          <span className="text-[#02CDCF]">i</span>
        </h1>
        <div className=" w-16 h-16 border-[5px] border-t-[#02CDCF] border-b-[#23AAAC] border-l-white border-r-white  animate-spin rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
