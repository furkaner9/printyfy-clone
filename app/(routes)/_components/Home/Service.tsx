import { services } from "@/app/contains";
import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="bg-mycolor2 py-32 relative overflow-hidden">
      <Image
        alt=""
        width={2000}
        height={150}
        src="/vaves/2.png"
        className="absolute top-0 lg:-top-20 w-full h-auto object-cover"
      />

      <div className="mx-auto container relative z-10">
        <div className="flex flex-col md:flex-row gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <Image
                alt=""
                src={service.image}
                width={500}
                height={500}
                className="w-40 h-40"
              />
              <h2 className="font-semibold text-3xl">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
