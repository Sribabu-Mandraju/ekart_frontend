import React, { useRef } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const Scroll = () => {
    const cards = [
        { name: "Siresha" },
        { name: "Sribabu" },
        { name: "Nakshatra" },
        { name: "Bindu" },
        { name: "Hello" },
        { name: "Sireesha" },
        { name: "Hi" },
        { name: "Hey" },
        { name: "Hiiiii" },
        { name: "Siresha" },
        { name: "Sribabu" },
        { name: "Nakshatra" },
        { name: "Bindu" },
        { name: "Hello" },
        { name: "Sireesha" },
        { name: "Hi" },
        { name: "Hey" },
        { name: "Hiiiii" },
    ];

    const scrollRef = useRef(null);
    const cardWidth = 300; // Adjust based on your card width
    const visibleCards = 5; // Number of visible cards

    const prevCard = () => {
        scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    };

    const nextCard = () => {
        scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    };

    return (
        <div className="bg-black h-[400px] w-full flex justify-center items-center gap-[20px] relative">
            <div className="absolute top-3 right-[40px] flex gap-[20px]">
                <div 
                    className="bg-white text-black text-[40px] cursor-pointer" 
                    onClick={prevCard} 
                    aria-label="Scroll Left"
                >
                    <FaAngleLeft />
                </div>
                <div 
                    className="bg-white text-black text-[40px] cursor-pointer" 
                    onClick={nextCard} 
                    aria-label="Scroll Right"
                >
                    <FaAngleRight />
                </div>
            </div>
            <div 
                ref={scrollRef} 
                style={{ scrollSnapType: "x mandatory" }} 
                className="flex h-[80%] gap-[20px]"
            >
                {cards.map((card, index) => (
                    <div 
                        key={index} 
                        className="w-[300px] mt-[70px] rounded-[20px] mb-[40px] bg-white text-black flex justify-center items-center" 
                        style={{ scrollSnapAlign: "start" }}
                    >
                        {card.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Scroll;
