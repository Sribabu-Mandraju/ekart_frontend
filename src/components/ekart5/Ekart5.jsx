import React from 'react';
import 'tailwindcss/tailwind.css';
import { FaStar, FaTruck } from 'react-icons/fa';

const Ekart5 = () => {
    return (
        <div className="border-2">
            <div className="nav w-full h-24 bg-red-500"> Nav </div>
            <div className="headphone-details w-full">
                <div className="headphone-img w-full h-[500px] md:h-[600px] lg:h-[728px] flex rounded-2xl sm:px-8 flex-wrap">
                    <div className="main-image w-full md:w-1/2 h-full flex flex-col gap-3 p-2 lg:p-8 md:p-5">
                        <div className="headphone w-full h-[350px] md:h-[400px] lg:h-[450px] rounded-lg bg-[#edf1f7]">
                            <img src="HEADPHONE.png" alt="Airpods Max" className="w-full h-full rounded-2xl p-2 md:p-4" />
                        </div>
                        <div className="small-images h-[100px] md:h-[150px] w-full flex py-2 gap-2 justify-center items-center">
                            {['bluehead.png', 'lighthead.png', 'purplehead.png', 'blackhead.png'].map((img, index) => (
                                <div key={index} className="disp-img h-[80px] md:h-[100px] lg:h-[120px] w-[100px] md:w-[120px] lg:w-[150px] bg-[#edf1f7] px-2 md:px-2 rounded-lg">
                                    <img src={img} alt={`Color variant ${index}`} className="rounded-lg h-full w-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="image-details w-full sm:w-1/2 h-full pl-2 md:pl-4 lg:p-8">
                        <div className="name-rating w-full border-b-2 pb-4 md:pb-5">
                            <h2 className="text-2xl md:text-3xl font-semibold pb-1">Airpods Max</h2>
                            <p className="lg:w-[300px] md:w-[250px] text-sm md:text-base pb-1">
                                A perfect balance of exhilarating high-fidelity audio and the effortless magic of Airpods.
                            </p>
                            <div className="rating text-sm md:text-base">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} className="text-green-500" />
                                ))}
                                <span className="text-gray-400">(121)</span>
                            </div>
                        </div>
                        <div className="price border-b-2 py-2 md:py-4">
                            <h5 className="text-2xl md:text-3xl font-semibold">$549.00 or $99.99/month</h5>
                            <p className="text-gray-400 text-xs md:text-sm">Suggested payments with 6 months special financing.</p>
                        </div>
                        <div className="count flex gap-5 md:gap-3">
                            <div className="count-btn h-10 md:h-12 w-30 md:w-36 bg-gray-300 rounded-full flex mt-2 md:mt-5">
                                <button className="h-10 md:h-12 w-10 md:w-12 text-lg md:text-xl font-semibold">-</button>
                                <span className="h-10 md:h-12 w-10 md:w-12 flex justify-center items-center">1</span>
                                <button className="h-10 md:h-12 w-10 md:w-12">+</button>
                            </div>
                            <div className="items-data py-3 md:py-5">
                                <p className="text-xs md:text-sm">Only <span className="text-orange-500">12 items</span> Left! <br /> Don’t miss it</p>
                            </div>
                        </div>
                        <div className="cart flex gap-2 md:gap-3 py-3 md:py-5">
                            <button className="w-32 md:w-36 sm:w-48 h-11 md:h-12 bg-green-800 rounded-full text-white font-semibold hover:bg-green-600" aria-label="Buy Now">
                                Buy Now
                            </button>
                            <button className="w-32 md:w-36 sm:w-48 h-11 md:h-12 bg-white rounded-full text-green-800 font-semibold border-2 border-green-800 hover:bg-green-800 hover:text-white" aria-label="Add to Cart">
                                Add to Cart
                            </button>
                        </div>
                        <div className="delivery w-full md:w-[350px] h-[170px] border-2 rounded-lg">
                            <div className="free-delivery py-3 md:py-5 border-b-2 px-4 md:px-5">
                                <p className="font-semibold">
                                    <FaTruck className="text-orange-500 px-1" /> Free Delivery
                                </p>
                                <p className="underline text-xs md:text-sm font-semibold pl-8">Enter your postal code for delivery availability</p>
                            </div>
                            <div className="return-delivery py-2 md:py-2 px-4 md:px-5">
                                <p>
                                    <FaTruck className="text-orange-500 px-1" /> Return Delivery
                                </p>
                                <p className="underline text-xs md:text-sm font-semibold pl-8">Free 30 days Delivery returns.<span className="underline">Details</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ekart5;
