import React from 'react';

const About = () => {
    return (
        <div className="">
            <div className="box h-[220px] md:h-[200px] w-full flex flex-wrap px-[15px] gap-x-20 lg:px-[120px] py-[10px]">
                <div className="box-1 h-[140px] w-[280px]">
                    <h6 className="text-[16px] font-semibold text-[red] pb-[10px]">Problems Trying</h6>
                    <h4 className="text-[20px] font-semibold">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent</h4>
                </div>
                <div className="box-2 h-[100px] w-[480px] flex items-start text-[#787878] lg:items-center">
                    Problems trying to resolve the conflict between the two major realms of classical physics: Newtonian mechanics.
                </div>  
            </div> 

            <div className="counters h-full w-full flex justify-center sm:justify-start sm:gap-10 flex-wrap px-[10px] sm:px-[70px]">
                <div className="count h-[120px] w-[200px] flex flex-col justify-center">
                    <h2 className="text-[48px] font-semibold text-center">15K</h2>
                    <p className="text-center text-[14px] font-semibold">Happy Customers</p>
                </div>
                <div className="count h-[120px] w-[200px] flex flex-col justify-center">
                    <h2 className="text-[48px] font-semibold text-center">150K</h2>
                    <p className="text-center text-[14px] font-semibold">Monthly visitors</p>
                </div>
                <div className="count h-[120px] w-[200px] flex flex-col justify-center">
                    <h2 className="text-[48px] font-semibold text-center">15</h2>
                    <p className="text-center text-[14px] font-semibold">Countries Worldwide</p>
                </div>
                <div className="count h-[120px] w-[200px] flex flex-col justify-center">
                    <h2 className="text-[48px] font-semibold text-center">100+</h2>
                    <p className="text-center text-[14px] font-semibold">Partners</p>
                </div>
            </div>
        </div>
    );
};

export default About;
