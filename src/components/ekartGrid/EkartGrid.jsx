import React from 'react';
import 'tailwindcss/tailwind.css';

const EkartGrid = () => {
    return (
        <div className="w-screen h-screen">
            <div className="flex flex-col justify-center items-center gap-2 w-full h-fit p-12">
                <div className="text-[12px] text-gray-600">WHAT WE DO</div>
                <div className="flex text-[40px] font-bold w-full flex-col justify-center items-center text-center sm:inline-block">
                    <span>Innovation</span>
                    <span>tailored for you</span>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="text-[14px] text-gray-600 font-semibold hover:text-black">
                        <a href="#">Home</a>
                    </div>
                    <div className="text-[14px] text-gray-600 font-semibold hover:text-black">
                        <a href="#">Team</a>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-4 grid-cols-2 gap-4 px-14 h-[100vh] overflow-hidden sm:grid-cols-4 sm:grid-rows-2">
                {productData.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    );
};

const ProductCard = ({ imageSrc, title, buttonText }) => {
    return (
        <div className="diag relative rounded-[15px] col-span-2 row-span-2 w-full h-full overflow-hidden">
            <img className="w-full h-full rounded-[15px]" src={imageSrc} alt={title} />
            <div className="box absolute top-0 flex flex-col items-center justify-center w-full h-full rounded-[15px] bg-black bg-opacity-60 text-white">
                <p className="text-[30px] font-bold">{title}</p>
                <button className="border border-white rounded-[30px] text-[20px] m-4 bg-black py-2 px-6">{buttonText}</button>
            </div>
        </div>
    );
};

const productData = [
    {
        imageSrc: "https://plus.unsplash.com/premium_photo-1664475951647-bfa3ab77d131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZhc2hpb24lMjBtb2RlbCUyMHdpdGglMjBwbGFpbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
        title: "Sports Wear",
        buttonText: "Shop now!",
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1582533575066-75bd83ac91de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzk1fHxjb3N0dW1lcyUyMGZvciUyMGElMjBmYXNoaW9uJTIwc2hvd3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Western Ware",
        buttonText: "Act Fast",
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1587367336516-887f58881b13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQ5fHxjb3N0dW1lcyUyMGZvciUyMGElMjBmYXNoaW9uJTIwc2hvd3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Top Ware",
        buttonText: "Grab Deal!",
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1591656852283-29bed2fe05ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDk0fHxjb3N0dW1lcyUyMGZvciUyMGElMjBmYXNoaW9uJTIwc2hvd3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Branded Accessories",
        buttonText: "Limited Stock",
    },
    {
        imageSrc: "https://plus.unsplash.com/premium_photo-1679440413702-555ea9d539dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGNvc3R1bWVzJTIwZm9yJTIwYSUyMGZhc2hpb24lMjBzaG93fGVufDB8fDB8fHww",
        title: "Trousers and Capris",
        buttonText: "Don't Miss!",
    },
];

export default EkartGrid;
