import React from 'react';

export default function CheckOutWizard({ activeStep = 0 }) {
  return (
    <div className="mb-5 steps w-full lg:steps-horizontal ">
      {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-2 border-b-2 text-center ${
              index <= activeStep
                ? 'border-indigo-500 text-indigo-500'
                : 'border-gray'
            }`}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}
