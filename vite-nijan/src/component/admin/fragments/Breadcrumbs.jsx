import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function Breadcrumbs({ redirect }) {
  return (
    <div className="mb-3 breadcrumbs bg-slate-200">
        <div className="py-5 page-container ">
            <div className="row">
                <div className="col-12 ">
                    <div className="flex items-center justify-start gap-2 text-xl bread-inner">
                        <span className="flex items-center text-black">Home<FaArrowRight class="ml-2" /></span>
                        <span className="font-bold text-orange-400">{redirect}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
