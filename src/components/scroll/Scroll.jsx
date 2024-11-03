import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const Scroll = () => {
    const cards = [
        { name: "Siresha" },
        { name: "Sribabu" },
        { name: "nakshatra" },
        { name: "bindu" },
        { name: "hello" },
        { name: "Sireesha" },
        { name: "Hi" },
        {name:"hey"},
        {name:"hiiiii"},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 5;

    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextCard = () => {
        if (currentIndex + cardsToShow < cards.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="bg-black h-[400px] w-full flex justify-center items-center gap-[20px] relative">
            <div className="absolute top-3 right-[40px] flex gap-[20px]">
                <div className="bg-white text-black text-[40px] cursor-pointer" onClick={prevCard}>
                    <FaAngleLeft />
                </div>
                <div className="bg-white text-black text-[40px] cursor-pointer" onClick={nextCard}>
                    <FaAngleRight />
                </div>
            </div>
            <div className=" flex overflow:hidden h-[80%] gap-[20px]">
                {cards.slice(currentIndex, currentIndex + cardsToShow).map((card, index) => (
                    <div key={index} className="w-[300px] mt-[70px] rounded-[20px] mb-[40px] bg-white text-black flex justify-center items-center">
                        {card.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Scroll;
