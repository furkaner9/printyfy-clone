"use client";
import axios from "axios";
import { Check, Timer, Truck } from "lucide-react";
import React, { useState } from "react";

interface StatusUpdaterProps {
  orderId: string;
  initialStatus: string;
}

const StatusUpdater = ({ initialStatus, orderId }: StatusUpdaterProps) => {
  const [status, setStatus] = useState(initialStatus);

  const handleStatusChange = async (newStatus: string) => {
    try {
      const response = await axios.patch("/api/order", {
        orderId,
        status: newStatus,
      });
      if (response.status === 200) {
        setStatus(newStatus);
      } else {
        console.log("Failed to update order status");
      }
    } catch (error) {
      console.log("error updating order status", error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-white">{status}</div>
      <div className="flex flex-row gap-4">
        <Timer
          className="w-5 h-5 text-white cursor-pointer"
          onClick={() => handleStatusChange("waiting")}
        />
        <Truck
          className="w-5 h-5 text-amber-400 cursor-pointer"
          onClick={() => handleStatusChange("in_cargo")}
        />
        <Check
          className="w-5 h-5 text-mycolor cursor-pointer"
          onClick={() => handleStatusChange("delivered")}
        />
      </div>
    </div>
  );
};

export default StatusUpdater;
