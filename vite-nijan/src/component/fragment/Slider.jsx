import React from 'react'

export default function Slider() {
  return (
    <div className="relative w-full h-[300px] bg-image">
      <img
        src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="flex-shrink object-cover w-screen h-[500px]"
      />
      <div className="absolute top-1/4 left-[200px]">
        <div className="title">
          <h1 className="font-bold text-9xl">DISTINT</h1>
          <h1 className="font-bold text-9xl">
            COFFEE <span className="text-green-600">AROMA</span>
          </h1>
          <h4 className="m-2 text-3xl">
            Lorem ipsum dolor sit amet consectetur
          </h4>
        </div>
        <button className="px-6 py-3 font-semibold transition-all ease-in read-more bg-slate-800 hover:bg-secondary rounded-[4px]">
          READ MORE
        </button>
      </div>
    </div>
  )
}
