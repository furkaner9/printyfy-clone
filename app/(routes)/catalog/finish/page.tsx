import { Check } from "lucide-react";
import React from "react";

const FinishPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col space-y-7 items-center justify-center mt-14">
        {/* Arka plan için ayrı div kullanalım */}
        <div className="bg-green-600 rounded-full p-4">
          <Check className="w-16 h-16 text-white" />
        </div>

        <p className="text-5xl font-semibold text-green-700">Order Success</p>

        <div className="w-4/6 mt-8">
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            vitae sed amet nostrum molestiae? Eos unde vero perferendis nulla
            cupiditate veritatis commodi reiciendis hic reprehenderit deleniti
            voluptatibus, eum amet doloribus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinishPage;
