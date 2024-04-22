import React from 'react'
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

function RecentPost({title, price, isLast = false, stat, children}) {
  return (
    <div className={`flex items-center justify-start gap-10  py-3 w-full ${isLast ? '' : 'border-b-[1px] border-slate-300'}`}>
        <div class="image">
            <img src="https://via.placeholder.com/75x75" alt="#" className='rounded-full' />
        </div>
        <div class="text-black">
            <h5><a href="#">{title}</a></h5>
            <p class="price">${price}</p>
            <ul class="flex items-center justify-center gap-1">
                <li class="text-yellow-400"><IoIosStar /></li>
                <li class="text-yellow-400"><IoIosStar /></li>
                <li class="text-yellow-400"><IoIosStar /></li>
                <li class="text-yellow-400"><IoIosStar /></li>
                <li class="text-yellow-400"><IoIosStarHalf /></li>
            </ul>
        </div>
    </div>
  )
}

export default RecentPost;