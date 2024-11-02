import React from 'react';
import 'tailwindcss/tailwind.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

const Card = () => {
    return (
        <div className="card h-[400px] w-[280px] border-[2px] rounded-lg">
            <div className="image bg-[#ccc] w-full h-[230px] relative">
                <div className="wishlist h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[white] absolute right-2 my-[10px]">
                    <AiOutlineHeart className="text-[#787878]" />
                </div>
                <img src="headphone-1.jpeg" alt="Wireless Earbuds" className="w-full h-full" />
            </div>
            <div className="content h-[120px] w-full">
                <div className="name flex justify-between text-[18px] font-bold py-[10px] px-[3px]">
                    <h5>Wireless Earbuds, IPX8</h5>
                    <span className="cost"><sup>$</sup>89<sup>00</sup></span>
                </div>
                <p className="text-[#ccc] pl-[5px]">Organic cotton earbuds certified</p>
                <div className="rating text pl-[5px]">
                    {[...Array(5)].map((_, index) => (
                        <AiFillStar key={index} className="text-[green]" />
                    ))}
                    <span className="text-[#ccc]">(121)</span>
                </div>
                <button className="add-cart h-[40px] w-[150px] border-[2px] rounded-full p-[5px] my-[10px] mx-[5px]">
                    Add Cart
                </button>
            </div>
        </div>
    );
};

export default Card;
