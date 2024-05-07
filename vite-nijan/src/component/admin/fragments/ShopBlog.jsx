import React from 'react'

export default function ShopBlog({img, children}) {
  return (
    <div class="w-full">
        <div class="shop-single-blog w-full flex items-center flex-col ">
            <img src={img} alt="#" />
            <div class="content flex items-center flex-col mt-8 gap-2">
                <p class="date">22 July , 2020. Monday</p>
                <a href="#" class=" font-bold text-black text-xl hover:text-orange-500 transition-all">Sed adipiscing ornare.</a>
                <a href="#" class=" hover:text-orange-500 transition-all">Continue Reading</a>
            </div>
        </div>
    </div>
  )
}
