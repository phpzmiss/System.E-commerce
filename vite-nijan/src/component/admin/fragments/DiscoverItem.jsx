import React from 'react'

export default function DiscoverItem() {
  return (
    <div class="col-lg-6 col-md-6 col-12">
        <div class="overflow-hidden relative">
            <img src="https://via.placeholder.com/600x370" class="h-full w-full transition-all" alt="#" />
            <div class="absolute left-0 top-1/2 pl-[35px]">
                <p class="text-[14px] text-orange-500 mb-[5px] font-medium capitalize">Man's Collectons</p>
                <h3 class="text-[22px] font-bold text-gray-800 capitalize">Man's items <br />Up to<span class="text-orange-500"> 50%</span></h3>
                <a href="#" class="border-b-2 border-solid border-gray-800 inline-block font-medium text-xs mt-[22px] text-gray-800 uppercase hover:text-orange-500 hover:border-orange-500 transition-all">Shop Now</a>
            </div>
        </div>
    </div>
  )
}
