import {
  Box,
  Brush,
  CheckCircle,
  ImageIcon,
  ShoppingCart,
  Truck,
} from "lucide-react";
import React from "react";

const steps = [
  {
    icon: <Box className="w-10 h-10 text-mycolor" />,
    title: "1. Choose Your Product",
    description: "Select a phone case, mug, or t-shirt to personalize.",
  },
  {
    icon: <ImageIcon className="w-10 h-10 text-mycolor" />,
    title: "2. Upload Your Design",
    description: "Upload an image or artwork you'd like to print.",
  },
  {
    icon: <Brush className="w-10 h-10 text-mycolor" />,
    title: "3. Customize",
    description: "Adjust size, position, and preview your final product.",
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-mycolor" />,
    title: "4. Checkout",
    description: "Complete your order using Iyzico or Stripe securely.",
  },
  {
    icon: <Truck className="w-10 h-10 text-mycolor" />,
    title: "5. We Deliver",
    description: "We produce and ship your product within 3-5 business days.",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-mycolor" />,
    title: "6. Enjoy!",
    description: "Enjoy your custom-designed product or gift it to someone!",
  },
];

const HowItWorksPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl space-y-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-slate-800">
        How It Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start space-x-6 bg-slate-100 rounded-lg p-6 shadow-md"
          >
            <div>{step.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksPage;
