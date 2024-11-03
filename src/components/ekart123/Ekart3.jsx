import React from 'react';

const Ekart3 = () => {
  return (
    <div className="visit w-full h-[500px] flex flex-col items-center">
      <div className="visit-cont h-[150px] w-full sm:w-[350px] bg-white flex flex-col justify-center items-center font-semibold gap-4">
        <p className="text-[12px] text-center">Visit our office</p>
        <h4 className="text-[30px] leading-none font-semibold text-center px-[2px]">
          We help small businesses with big ideas
        </h4>
      </div>
      <div className="visit-cards w-full flex justify-center gap-5 flex-wrap">
        {[
          {
            icon: 'phone',
            email1: 'georgia.young@example.com',
            email2: 'georgia.young@aple.com',
            title: 'Get Support',
          },
          {
            icon: 'location-dot',
            email1: 'georgia.young@example.com',
            email2: 'georgia.young@aple.com',
            title: 'Get Support',
          },
          {
            icon: 'envelope',
            email1: 'georgia.young@example.com',
            email2: 'georgia.young@aple.com',
            title: 'Get Support',
          },
        ].map((card, index) => (
          <div
            key={index}
            className="card h-[350px] w-[270px] flex flex-col items-center justify-center border gap-3 rounded-lg group hover:bg-[#08295e] hover:text-white transition-all duration-300 ease-in  shadow-lg"
          >
            <div className="icon h-[50px] w-[50px]">
              <i className={`fa-solid fa-${card.icon} text-[48px] text-[dodgerblue]`}></i>
            </div>
            <div className="card-details w-full flex flex-col items-center">
              <p className="mail-1 text-center">{card.email1}</p>
              <p className="mail-2 text-center pb-[10px]">{card.email2}</p>
              <h2 className="text-center pb-[10px]">{card.title}</h2>
              <button className="h-[50px] w-[170px] bg-white rounded-full border-[2px] border-[dodgerblue] text-[dodgerblue] group-hover:bg-[#08295e] group-hover:text-white transition-all duration-300 ease-in-out">
                Submit Request
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ekart3;
