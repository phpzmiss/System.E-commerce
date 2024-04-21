import React from 'react'
 import { VscAccount, VscBellDot, VscGear  } from "react-icons/vsc";
 
function Header({OpenSidebar}) {
  return (
    <div className="w-[100vw] fixed h-[50px] bg-slate-100 shadow-full text-black">
      <div className="grid items-center justify-between h-full grid-cols-5 px-10 gap-x-10">
        <div className="col-span-2 gap-x-[100px]">
          <div className="grid grid-cols-2 gap-x-10">
            <span className="text-2xl font-extrabold tracking-widest text-slate-700">
              NIJAN SHOP
            </span>
          </div>
        </div>
        <div></div>
        <div className="flex items-center justify-end col-span-2 gap-x-10">
          <div className="flex items-center justify-center text-xl font-bold gap-x-2 gap-y-1">
            <VscGear className='w-10 h-10 p-2 rounded-full cursor-pointer bg-slate-200'/>
            <VscBellDot className='w-10 h-10 p-2 rounded-full cursor-pointer bg-slate-200' />
            <VscAccount className='w-10 h-10 p-2 rounded-full cursor-pointer bg-slate-200'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header