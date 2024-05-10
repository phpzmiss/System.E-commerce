import React, { useEffect, useState } from "react";
import ElementTask from "./ElementTask";
import RecentPost from "../admin/fragments/RecentPost";
import CategoryService from "../modules/CategoryService";

const Taskbar = ({ handleChangeData, activeCategory }) => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CategoryService.getAll();
        if (response.data.code == 200) {
          setCategory(response.data.result);
          setLoading(false);
        }
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <section>
    <div className="flex flex-col items-start justify-start p-5 mt-5 text-black rounded-md h-fit gap-y-3 bg-slate-200">
      <ElementTask className="w-full text-center border-b-[1px] border-slate-300">
        <span className="w-full text-lg font-bold">Category</span>
      </ElementTask>
      <ElementTask className="text-[#2b2b36] w-full">
        <p className={"w-full px-2 py-[3px] text-lg font-semibold hover:text-white hover:bg-blue-400 transition-all cursor-pointer " + (Number(activeCategory) == 0 ? "bg-blue-400 text-white" : "")} onClick={() => handleChangeData(0)}>All</p>
        {!loading && 
          category.map((item, index) => (
            <p key={index} className={"w-full px-2 py-[3px] text-lg font-semibold hover:text-white hover:bg-blue-400 transition-all cursor-pointer " + (Number(activeCategory) == item.categoryId ? "bg-blue-400 text-white" : "")} onClick={() => handleChangeData(item.categoryId)}>
              {item.categoryName}
            </p>
          ))
        }
      </ElementTask>
    </div>
    {/* <div className="flex flex-col items-start justify-start p-5 mt-5 text-black rounded-md h-fit gap-y-3 bg-slate-200">
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
    </div> */}
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
