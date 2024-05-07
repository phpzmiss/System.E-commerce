import React from 'react'

export default function DiscoverItem({img, children}) {
  return (
    <div class="col-lg-6 col-md-6 col-12">
        <div class="overflow-hidden relative">
            <img src={img} class="h-full w-full transition-all" alt="#" />
            <div class="absolute left-0 top-1/2 pl-[35px]">
                <p class="text-[14px] text-orange-500 mb-[5px] font-medium capitalize">Man's Collectons</p>
                <h3 class="text-[22px] font-bold text-blue-300 capitalize">Man's items <br />Up to<span class="text-orange-500"> 50%</span></h3>
                <a href="#" class="border-b-2 border-solid border-blue-300 inline-block font-medium text-xs mt-[22px] text-blue-300 uppercase hover:text-orange-500 hover:border-orange-500 transition-all">Shop Now</a>
            </div>
        </div>
    </div>
  )
}
