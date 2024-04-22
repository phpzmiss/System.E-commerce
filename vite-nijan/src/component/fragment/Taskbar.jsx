import React from "react";
import ElementTask from "./ElementTask";
import RecentPost from "../admin/fragments/RecentPost";

const Taskbar = () => {
  return (
    <section>
    <div className="flex flex-col items-start justify-start p-5 mt-5 text-black rounded-md h-fit gap-y-3 bg-slate-200">
      <ElementTask className="w-full text-center border-b-[1px] border-slate-300">
        <span className="w-full text-lg font-bold">Category</span>
      </ElementTask>
      <ElementTask className="text-[#2b2b36]">
        <p className="w-full py-[2px] text-md hover:text-orange-500 transition-all cursor-pointer">Category</p>
        <p className="w-full py-[2px] text-md hover:text-orange-500 transition-all cursor-pointer">T-shirts</p>
        <p className="w-full py-[2px] text-md hover:text-orange-500 transition-all cursor-pointer">jacket</p>
        <p className="w-full py-[2px] text-md hover:text-orange-500 transition-all cursor-pointer">jeans</p>
        <p className="w-full py-[2px] text-md hover:text-orange-500 transition-all cursor-pointer">sweatshirts</p>
        <p className="w-full py-[2px] text-md hover:text-orange-500 transition-all cursor-pointer">accessories</p>
      </ElementTask>
    </div>
    <div className="flex flex-col items-start justify-start p-5 mt-5 text-black rounded-md h-fit gap-y-3 bg-slate-200">
      <ElementTask className="w-full text-center border-b-[1px] border-slate-300">
        <span className="w-full text-lg font-bold">Shop By Price</span>
      </ElementTask>
      <ElementTask className="text-[#2b2b36]">
        <p className="w-full py-[2px] text-md hover:text-orange-500 transition-all cursor-pointer">Category</p>
        <p className="w-full py-[2px] text-md hover:text-orange-500 transition-all cursor-pointer">T-shirts</p>
        <p className="w-full py-[2px] text-md hover:text-orange-500 transition-all cursor-pointer">jacket</p>
        <p className="w-full py-[2px] text-md hover:text-orange-500 transition-all cursor-pointer">jeans</p>
        <p className="w-full py-[2px] text-md hover:text-orange-500 transition-all cursor-pointer">sweatshirts</p>
        <p className="w-full py-[2px] text-md hover:text-orange-500 transition-all cursor-pointer">accessories</p>
      </ElementTask>
    </div>
    <div className="flex flex-col items-start justify-start p-5 mt-5 text-black rounded-md h-fit gap-y-3 bg-slate-200">
      <ElementTask className="w-full text-center border-b-[1px] border-slate-300">
        <span className="w-full text-lg font-bold">Recent Post</span>
      </ElementTask>
      <ElementTask className="w-full">
        <RecentPost title="Girls Dress" price="99.50" />
        <RecentPost title="Women Clothings" price="99.50" />
        <RecentPost title="Man T-Shirts" price="99.50" isLast={true} />
      </ElementTask>
    </div>
    </section>

  );
};

export default Taskbar;
