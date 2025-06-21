"use client";
import { TableCell } from "@/components/ui/table";
import { Check, Timer, Truck } from "lucide-react";
import React, { useState } from "react";

interface StatusUpdaterProps {
  orderId: string;
  initialStatus: string;
}

const StatusUpdater = ({ initialStatus, orderId }: StatusUpdaterProps) => {
  const [status, setStatus] = useState(initialStatus);
  const handleStatusChange = async (newStatus: string) => {};
  return (
    <>
      <TableCell>{status}</TableCell>
      <TableCell>
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
      </TableCell>
    </>
  );
};

export default StatusUpdater;
