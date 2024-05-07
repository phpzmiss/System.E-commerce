import React from 'react'
import slider from "../../assets/slider.jpg";

export default function Slider() {
  return (
    <div className="relative w-full h-[300px] bg-image">
      <img
        src={slider}
        alt=""
        className="flex-shrink object-cover w-screen h-[500px]"
      />
      <div className="absolute top-1/4 left-[200px]">
        <div className="title">
          <h1 className="font-bold text-9xl">CANON</h1>
          <h1 className="font-bold text-9xl">
            CAMERA <span className="text-green-600">AROMA</span>
          </h1>
          <h4 className="m-2 text-3xl">
            Lorem ipsum dolor sit amet consectetur
          </h4>
        </div>
      </div>
    </div>
  )
}
