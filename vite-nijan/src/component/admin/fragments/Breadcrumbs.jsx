import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function Breadcrumbs({ redirect }) {
  return (
    <div class="breadcrumbs bg-slate-200 mb-3">
        <div class="page-container py-5 ">
            <div class="row">
                <div class="col-12 ">
                    <div class="bread-inner flex items-center justify-start gap-2 text-xl">
                        <span class="flex items-center text-black">Home<FaArrowRight class="ml-2" /></span>
                        <span class="text-orange-400 font-bold">{redirect}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
