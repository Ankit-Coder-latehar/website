import React, { useState, useRef } from 'react';

const Disclaimer = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const agreeButtonRef = useRef(null);

  const handleAgree = () => {
    setIsAgreed(true);
  };

  return (
    <>
      {!isAgreed && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 px-4 sm:px-6 lg:px-8"
          role="alertdialog"
          aria-labelledby="disclaimer-title"
          aria-describedby="disclaimer-description"
        >
          <div className="bg-[#9B6A2A] text-white p-6 sm:p-8 md:p-10 rounded-lg max-w-lg w-full text-center shadow-lg">
            <div id="disclaimer-title" className="text-4xl sm:text-5xl mb-4">!</div>
            <h2 className="text-xl sm:text-2xl mb-4">Disclaimer</h2>
            <p id="disclaimer-description" className="text-sm sm:text-base mb-4">
              As per the Chartered Accountants Act, 1949 and the guidelines laid down by the Institute of Chartered Accountants of India (ICAI), Chartered Accountants are prohibited from soliciting clients or professional work either directly or indirectly. This website is only intended to provide general information about TRJ, its partners, and the services it renders. By clicking on ‘I Agree’, the user acknowledges the following:
            </p>
            <ul className="list-disc list-inside text-left text-sm sm:text-base mb-4">
              <li>The user wishes to gain more information about TRJ. for his/her own use;</li>
              <li>There has been no advertisement, personal communication, invitation, or inducement of any sort whatsoever from TRJ. or any of its partners to solicit any work through this website;</li>
              <li>Any information obtained from this website is completely at the user’s volition;</li>
              <li>Information contained in the website is not in the nature of professional opinion and would not under any circumstances be equivalent to any professional advice.</li>
            </ul>
            <button
              ref={agreeButtonRef}
              onClick={handleAgree}
              className="px-4 sm:px-6 py-2 border border-white text-white hover:bg-white hover:text-[#9B6A2A] transition-colors duration-300 rounded"
            >
              I Agree
            </button>
          </div>
        </div>
      )}

      {isAgreed && (
        <div>
         
        </div>
      )}
    </>
  );
};

export default Disclaimer;
