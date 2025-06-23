import { BadgeCheck, Shirt, Smartphone, CupSoda } from "lucide-react";
import React from "react";

const pricingPlans = [
  {
    icon: <Smartphone className="w-10 h-10 text-mycolor" />,
    title: "Phone Case",
    price: 249.99,
    features: [
      "Shock-proof Material",
      "Glossy / Matte Options",
      "High-Resolution Printing",
      "Supports All Phone Models",
    ],
  },
  {
    icon: <CupSoda className="w-10 h-10 text-mycolor" />,
    title: "Custom Mug",
    price: 149.99,
    features: [
      "Ceramic Mug (11oz)",
      "Dishwasher Safe",
      "Full-Wrap Printing",
      "Perfect Gift Item",
    ],
  },
  {
    icon: <Shirt className="w-10 h-10 text-mycolor" />,
    title: "T-Shirt",
    price: 199.99,
    features: [
      "100% Cotton Fabric",
      "Unisex Fit",
      "High-Quality Print Area",
      "Multiple Sizes Available",
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-12 text-slate-800">
        Pricing
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-8 border border-slate-200 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center mb-6">
              {plan.icon}
            </div>
            <h2 className="text-xl font-bold text-center mb-2">{plan.title}</h2>
            <p className="text-center text-3xl font-bold text-mycolor mb-4">
              ₺{plan.price}
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
