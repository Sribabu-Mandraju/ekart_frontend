import React from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const HeadphoneCard = ({ image, title, price }) => {
    return (
        <div className="card h-[400px] w-[280px] border-[2px] rounded-lg">
            <div className="image bg-[#ccc] w-full h-[230px] relative">
                <div className="wishlist h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[white] absolute right-2 my-[10px]">
                    <FontAwesomeIcon icon={faHeart} className="text-[#787878]" />
                </div>
                <img src={image} alt={title} className="w-full h-full" />
            </div>
            <div className="content h-[120px] w-full">
                <div className="name flex justify-between text-[18px] font-bold py-[10px] px-[3px]">
                    <h5>{title}</h5>
                    <span className="cost"><sup>$</sup>{price}</span>
                </div>
                <p className="text-[#ccc] pl-[5px]">Organic cotton earbuds certified</p>
                <div className="rating text pl-[5px]">
                    {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon key={index} icon={faStar} className="text-[green]" />
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

const Ekart4= () => {
    return (
        <div>
            <div className="top lg:h-[220px] lg:w-[90vw] bg-[pink] rounded-lg flex flex-wrap m-[20px] md:m-[50px] lg:justify-between">
                <div className="content h-[200px] w-[500px] p-[40px]">
                    <h3 className="text-[25px] sm:text-[37px] font-semibold leading-none pb-[20px]">
                        Grab up to 50% Off On Selected Headphones
                    </h3>
                    <button className="buynow h-[40px] w-[100px] bg-[darkgreen] text-[white] font-semibold rounded-full">
                        Buy now
                    </button>
                </div>
                <div className="image md:w-[250px] lg:mx-[50px]">
                    <img src="topimg.png" alt="Promotional" className="h-[220px]" />
                </div>
            </div>

            <div className="menu w-full flex gap-3 px-[20px] sm:px-[40px] flex flex-wrap">
                {['Headphone type', 'Price', 'Review', 'Color', 'Material', 'All Filters'].map((item) => (
                    <div key={item} className="headphone-type flex bg-[#ccc] px-[10px] justify-center items-center rounded-full py-[3px]">
                        <p>{item}</p>
                        <span className="px-[10px] py-[2px]">
                            <FontAwesomeIcon icon={faAngleDown} className="text-[12px]" />
                        </span>
                    </div>
                ))}
            </div>

            <div className="headphones">
                <h1 className="text-[24px] font-bold p-[20px] md:p-[50px]">Headphones for You!</h1>
                <div className="cards h-[450px] w-full flex justify-around flex-wrap gap-5">
                    {[
                        { image: 'headphone-1.jpeg', title: 'Wireless Earbuds, IPX8', price: '89.00' },
                        { image: 'headphone-2.jpeg', title: 'Wireless Earbuds, IPX8', price: '89.00' },
                        { image: 'headphone-3.jpeg', title: 'Wireless Earbuds, IPX8', price: '89.00' },
                        { image: 'headphone-4.jpeg', title: 'Wireless Earbuds, IPX8', price: '89.00' }
                    ].map((headphone, index) => (
                        <HeadphoneCard key={index} {...headphone} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ekart4;