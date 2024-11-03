import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className="w-full flex border border-2 border-gray items-justify-center py-[10px]">
                <div className="flex flex-col lg:flex-row sm:pl-10 gap-7">
                    <div className="w-full px-4 lg:px-0 pr-10">
                        <p className="text-2xl pt-6 font-bold">Consulting Agency for your business</p>
                        <p>The quick dog catches a fox</p>
                    </div>
                    <div className="h-[40px] w-[120px] flex sm:pt-9 sm:pl-0 px-4">
                        <button type="button" className="h-[40px] w-[120px] bg-blue-400 rounded-full p-2 text-[white] font-semibold">Contact</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-1 lg:grid-cols-5 p-4 sm:p-10 item-center gap-4">
                <div className="col-span-5 lg:col-span-1 sm:item-center">
                    <p className="font-bold">Company Info</p>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                </div>
                <div className="col-span-5 lg:col-span-1">
                    <p className="font-bold">Legal</p>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                </div>
                <div className="col-span-5 lg:col-span-1">
                    <p className="font-bold">Features</p>
                    <p>Business Market</p>
                    <p>User Analysis</p>
                    <p>Live Chat</p>
                    <p>Unlimited Support</p>
                </div>
                <div className="col-span-5 lg:col-span-1">
                    <p className="font-bold">Resources</p>
                    <p>iOS and Android</p>
                    <p>Watch a Demo</p>
                    <p>Customers</p>
                    <p>API</p>
                </div>
                <div className="col-span-5 lg:col-span-1">
                    <p className="font-bold">Get in Touch</p>
                    <p className="flex items-center pt-2">
                        <i className=" text-[dodgerblue] text-[18px] pr-[15px]"><FaPhone /></i>
                        <span>(480) 555-0103</span>
                    </p>
                    <p className="flex items-center pt-2">
                        <i className=" text-[dodgerblue] text-[22px] pr-[19px]"><FaLocationDot /></i>
                        <span>4517 Washington Ave.</span>
                    </p>
                    <p className="flex items-center pt-2">
                        <i className="text-[dodgerblue] text-[22px] pr-[15px]"><MdEmail /></i>
                        <span>debra.holt@example.com</span>
                    </p>
                </div>
            </div>
            <div className="w-full flex items-center flex-col sm:flex-row sm:justify-around text-center bg-[black] text-[white]">
                <p className="pt-1">Made with love by Figmaland. All rights reserved.</p>
                <div className="flex items-center sm:pr-36 justify-center gap-2">
                    <span className="h-[30px] w-[30px] bg-[white] rounded-full">
                        <i className=" text-[dodgerblue] text-[30px]"><FaFacebook /></i>
                    </span>
                    <span className="h-[30px] w-[30px] bg-[white] rounded-lg">
                        <i className="text-[dodgerblue] text-[30px]"><FaInstagram /></i>
                    </span>
                    <span className="h-[30px] w-[30px] bg-[white] rounded-full flex justify-center items-center">
                        <i className=" text-[dodgerblue] text-[22px]"><FaTwitterSquare /> </i>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
