import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiReload } from "react-icons/tfi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";

export default function ShopService() {
  return (
	<section class="shop-services section home">
        <div class="page-container">
            <div class="grid grid-cols-4 gap-4">
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-service flex items-center gap-8">
                        <LiaShippingFastSolid class="w-[38px] h-[38px]" />
                        <div>
                            <h4>Free shiping</h4>
                            <p>Orders over $100</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-service flex items-center gap-8">
                        <TfiReload class="w-[38px] h-[38px]" />
                        <div>
                            <h4>Free Return</h4>
                            <p>Within 30 days returns</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12 ">
                    <div class="single-service flex items-center gap-8">
                        <RiSecurePaymentLine class="w-[38px] h-[38px]" />
                        <div>
                            <h4>Secure Payment</h4>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-service flex items-center gap-8">
                        <IoPricetagsOutline class="w-[38px] h-[38px]" />
                        <div>
                            <h4>Best Price</h4>
                            <p>Guaranteed price</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
