import React from 'react';



const Ekart2 = () => {
  return (
    <div className="faq h-[700px] w-full flex flex-col items-center">
      <div className="faqcont h-[150px] w-full md:w-[350px]">
        <h2 className="text-[42px] font-semibold text-center">Pricing FAQ</h2>
        <p className="text-[#787878] text-center pb-[10px]">
          Problems trying to resolve the conflict between the two major realms of classical Physics
        </p>
      </div>
      <div className="faq-question sm:h-[500px] w-[95vw] lg:w-[900px] flex flex-wrap py-[50px] justify-around bg-[aliceblue] rounded px-[20px] gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="question h-[130px] w-[320px] text-[14px]">
            <h3 className="que font-semibold text-[14px]">
              <span className="text-[dodgerblue] mr-[4px]">
                <i className="fas fa-angle-right"></i>
              </span>
              The quick fox jumps over the lazy dog
            </h3>
            <p className="quedata text-[#787878] text-[13px] pl-[15px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELLIT official consequent door ENIM RELIT Mollie. Excitation veniall
              consequent sent nostrum met.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ekart2;
