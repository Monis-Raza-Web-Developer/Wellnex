import React from "react";

const LetsConnectSection = () => {
  return (
    <>
           <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-[#34C759]">What Happens Next?</h2>
            <p className="text-gray-400 mb-6">
              Once you submit the form, here’s how we take your request forward:
            </p>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#34C759] mt-1">✔</span>
                <span>Our expert team reviews your inquiry and reaches out within 24 hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#34C759] mt-1">✔</span>
                <span>We discuss your goals, timeline, and expectations in a short call.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#34C759] mt-1">✔</span>
                <span>We prepare a tailored proposal with clear steps and pricing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#34C759] mt-1">✔</span>
                <span>Once approved, we officially kickstart your project journey!</span>
              </li>
            </ul>
          </div>
    </>
  );
};

export default LetsConnectSection;