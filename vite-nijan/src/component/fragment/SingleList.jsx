import React from 'react'
import SaleItem from './SaleItem'

export default function SingleList({title, children}) {
  return (
    <div>
        <div class="row">
            <div class="col-12">
                <div class="shop-section-title">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-3">
            <SaleItem></SaleItem>
            <SaleItem></SaleItem>
            <SaleItem></SaleItem>
        </div>
    </div>
  )
}
