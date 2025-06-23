import { Mail, Phone, Instagram, HelpCircle } from "lucide-react";
import React from "react";

const contacts = [
  {
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    title: "Email",
    value: "support@printyfy.com",
    link: "mailto:support@printyfy.com",
  },
  {
    icon: <Phone className="w-6 h-6 text-green-600" />,
    title: "Phone",
    value: "+90 555 555 5555",
    link: "tel:+905555555555",
  },
  {
    icon: <Instagram className="w-6 h-6 text-pink-500" />,
    title: "Instagram",
    value: "@furkaneric",
    link: "https://instagram.com/furkaneric",
  },
];

const NeedHelpPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl space-y-10">
      <div className="flex items-center justify-center space-x-3">
        <HelpCircle className="w-8 h-8 text-mycolor" />
        <h1 className="text-3xl font-bold text-center">Need Help?</h1>
      </div>

      <p className="text-center text-lg text-gray-700">
        Have a question? We’re here to help you 7/24! Feel free to contact us
        via any of the methods below.
      </p>

      <div className="space-y-6">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 bg-white shadow-md p-5 rounded-lg border border-slate-200"
          >
            <div>{item.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                {item.value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeedHelpPage;
