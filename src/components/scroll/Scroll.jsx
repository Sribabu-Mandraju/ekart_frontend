import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Scroll = () => {
    const settings = {
        dots: true,         
        infinite: true,  
        speed: 500,         
        slidesToShow: 2,    
        slidesToScroll: 1,  
    };

    const data = [
        { photo: "/download.jpeg", name: "Sireesha", about: "Hi guys, how are you?" },
        { photo: "/download.jpeg", name: "DBMS", about: "Hi guys, how are you?" },
        { photo: "/download.jpeg", name: "DAA", about: "Hi guys, how are you?" },
        { photo: "/download.jpeg", name: "DLD", about: "Hi guys, how are you?" },
    ];

    return (
        <div className="bg-black flex justify-center items-center h-[500px] w-full">
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="m-4 h-[350px] w-[300px] rounded-[20px] bg-white shadow-lg">
                        <div className="bg-[#800080] h-[200px] w-full p-[20px] flex justify-center items-center relative">
                            <img 
                                src={item.photo} 
                                alt={item.name} 
                                className="h-[200px] w-[200px] rounded-full absolute" 
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 p-4">
                            <div className="text-black text-2xl font-bold">{item.name}</div>
                            <div className="text-black text-md">{item.about}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Scroll;







































































/*
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
    const cardWidth = 300; 
    const visibleCards = 5; 

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
                    
                >
                    <FaAngleLeft />
                </div>
                <div 
                    className="bg-white text-black text-[40px] cursor-pointer" 
                    onClick={nextCard} 
                   
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
};re

export default Scroll;
*/


/*
import {React,useState} from "react";
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
const Scroll=()=>{
    const cards=[
        {name:"siri",
            bg:"#FFFF00"
        },
        {name:"siri3",
            bg:"yellow"
        },
        {name:"siri4",
            bg:"red"
        },
        {name:"siri5",
            bg:"white"
        },
        {name:"siri5",
            bg:"blue"
        },
        {name:"siri6",
            bg:"pink"
        },
        {name:"siri7"},
        {name:"siri8"},
    ]
    const[count,setcount]=useState(0);
    const prevCard=()=>{
     if(count>0){
        setcount(count-1);
     }
    }
    const nextCard=()=>{
     if(count<cards.length-1){
        setcount(count+1);
     }
    }
    const defaultBgColor="white";
return(

<div className="bg-black h-[400px] w-[100%] flex justify-center items-center gap-[20px] relative"> 
<div className="absolute top-3 right-[40px] flex gap-[20px]">
                <div 
                    className="bg-white text-black text-[40px] cursor-pointer" 
                    onClick={prevCard} >
                    <FaAngleLeft />
                </div>
                <div 
                    className="bg-white text-black text-[40px] cursor-pointer" 
                    onClick={nextCard}>
                    <FaAngleRight />
                </div>
            </div>
    <div style={{backgroundColor:cards[count].bg||"white"}} className="text-black h-[80%] w-[300px] mt-[20px] mb-[20px] rounded-[20px] direction-col">
        {cards[count].name}</div>
</div>
);
}
export default Scroll;
*/














