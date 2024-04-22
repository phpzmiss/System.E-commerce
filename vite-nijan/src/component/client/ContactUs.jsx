import React from 'react'
import Breadcrumbs from '../admin/fragments/Breadcrumbs'
import Subscribe from '../admin/fragments/Subscribe'
import Button from "../admin/form/button/Button";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { PiAddressBookFill } from "react-icons/pi";

export default function ContactUs() {
  return (
    <section class="pt-[100px] contact-us">
        <Breadcrumbs redirect="Contact" />
        <div class="page-container grid grid-cols-4 gap-3">
            <div class="form-main col-span-3">
                <div class="title">
                    <h4>Get in touch</h4>
                    <h3>Write us a message</h3>
                </div>
                <form class="form" method="post" action="mail/mail.php">
                    <div class="row grid grid-cols-2 gap-2">
                        <div class="col-lg-6 col-12 pb-1">
                            <div class="form-group">
                                <label class="pb-1">Your Name<span>*</span></label>
                                <input name="name" type="text" placeholder="" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-12 pb-1">
                            <div class="form-group">
                                <label class="pb-1">Your Subjects<span>*</span></label>
                                <input name="subject" type="text" placeholder="" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-12 pb-1">
                            <div class="form-group">
                                <label class="pb-1">Your Email<span>*</span></label>
                                <input name="email" type="email" placeholder="" />
                            </div>	
                        </div>
                        <div class="col-lg-6 col-12 pb-1">
                            <div class="form-group">
                                <label class="pb-1">Your Phone<span>*</span></label>
                                <input name="company_name" type="text" placeholder="" />
                            </div>	
                        </div>
                    </div>
                    <div class="col-12 pb-1">
                        <div class="form-group message">
                            <label>Your message<span>*</span></label>
                            <textarea name="message" placeholder=""></textarea>
                        </div>
                    </div>
                    <div class="col-12 mt-5">
                        <div class="form-group button">
                        <Button
                            className="px-3 py-4 bg-orange-500 hover:bg-orange-300 max-w-[200px] transition-all rounded-none"
                            >
                            Send Message
                        </Button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="single-head">
                <div class="single-info">
                    <MdOutlinePhone class="w-[40px] h-[40px] p-2 bg-orange-400 rounded-sm text-white" />
                    <h4 class="title">Call us Now:</h4>
                    <ul>
                        <li>+123 456-789-1120</li>
                        <li>+522 672-452-1120</li>
                    </ul>
                </div>
                <div class="single-info">
                    <IoMailOpenOutline class="w-[40px] h-[40px] p-2 bg-orange-400 rounded-sm text-white" />
                    <h4 class="title">Email:</h4>
                    <ul>
                        <li><a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></li>
                        <li><a href="mailto:info@yourwebsite.com">support@yourwebsite.com</a></li>
                    </ul>
                </div>
                <div class="single-info">
                    <PiAddressBookFill class="w-[40px] h-[40px] p-2 bg-orange-400 rounded-sm text-white" />
                    <h4 class="title">Our Address:</h4>
                    <ul>
                        <li>KA-62/1, Travel Agency, 45 Grand Central Terminal, New York.</li>
                    </ul>
                </div>
            </div>
        </div>
        <Subscribe />
    </section>
  )
}
