import React, { useState } from 'react';
import Home from '../pages/Home';


const Disclaimer = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgree = () => {
    setIsAgreed(true);
  };

  return (
    <>
      {!isAgreed && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-[#9B6A2A] text-white p-8 rounded-lg max-w-lg w-full text-center shadow-lg">
            <div className="text-5xl mb-4">!</div>
            <h2 className="text-2xl mb-4">Disclaimer</h2>
            <p className="mb-4">
              As per the Chartered Accountants Act, 1949 and the guidelines laid down by the Institute of Chartered Accountants of India (ICAI), Chartered Accountants are prohibited from soliciting clients or professional work either directly or indirectly. This website is only intended to provide general information about AJH & Co., its partners, and the services it renders. By clicking on ‘I Agree’, the user acknowledges the following:
            </p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>The user wishes to gain more information about AJH & Co. for his/her own use;</li>
              <li>There has been no advertisement, personal communication, invitation, or inducement of any sort whatsoever from AJH & Co. or any of its partners to solicit any work through this website;</li>
              <li>Any information obtained from this website is completely at the user’s volition;</li>
              <li>Information contained in the website is not in the nature of professional opinion and would not under any circumstances be equivalent to any professional advice.</li>
            </ul>
            <button
              onClick={handleAgree}
              className="px-6 py-2 border border-white text-white hover:bg-white hover:text-[#9B6A2A] transition-colors duration-300 rounded"
            >
              I Agree
            </button>
          </div>
        </div>
      )}

      {isAgreed && (
        <div className="">

        </div>
      )}
    </>
  );
};

export default Disclaimer;
