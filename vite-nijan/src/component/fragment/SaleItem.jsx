import React from 'react'

export default function SaleItem() {
  return (
    <div class="flex items-center justify-start gap-5 border-[1px] bg-slate-100 border-slate-200 p-2">
        <div class="col-lg-6 col-md-6 col-12">
            <div class="list-image overlay">
                <img src="https://via.placeholder.com/115x140" alt="#" />
                <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12 no-padding">
            <div class="content">
                <h4 class="title text-black text-lg"><a href="#">Licity jelly leg flat Sandals</a></h4>
                <p class="price with-discount mt-3 px-4 py-[2px] bg-orange-500 w-fit text-white rounded-full">$59</p>
            </div>
        </div>
    </div>
  )
}
