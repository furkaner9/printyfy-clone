import { prismadb } from "@/lib/prismadb";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PhoneModal from "../../_components/Phone/PhoneModal";
import StatusUpdater from "../../_components/StatusUpdater";

const PhoneOrderPage = async () => {
  const orders = await prismadb.order.findMany({
    where: {
      configuration: {
        type: "phoneCase",
      },
    },
    include: {
      configuration: true,
      address: true,
    },
    orderBy: {
      configurationId: "desc",
    },
  });

  return (
    <div className="container mx-auto mt-16">
      <h2 className="text-2xl text-center font-semibold mb-6">Phone Cases</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-slate-600 text-white px-4 rounded-lg"
      >
        {orders.map((order) => (
          <AccordionItem value={order.id} key={order.id}>
            <AccordionTrigger>
              <div className="text-left">
                <div className="flex justify-between space-x-4">
                  <span>{order.address.phoneNumber}</span>
                  <span>{order.address.street.toUpperCase()}</span>
                  <span>{order.address.city.toUpperCase()}</span>
                  <span>{order.address.country.toUpperCase()}</span>
                  <span>{order.address.state.toUpperCase()}</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Table className="bg-slate-800 text-white rounded-xl">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">Type</TableHead>
                    <TableHead className="text-white">Case Colour</TableHead>
                    <TableHead className="text-white">Case Model</TableHead>
                    <TableHead className="text-white">Case Finish</TableHead>
                    <TableHead className="text-white">Case Material</TableHead>
                    <TableHead className="text-white">Base Price</TableHead>
                    <TableHead className="text-white">Total Price</TableHead>
                    <TableHead className="text-white">Payment Type</TableHead>
                    <TableHead className="text-white">Payment Date</TableHead>
                    <TableHead className="text-white">Preview</TableHead>
                    <TableHead className="text-white">Type</TableHead>
                    <TableHead className="text-white">#</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">Phone Case</TableCell>
                    <TableCell>
                      {order.configuration.caseColor?.toUpperCase()}
                    </TableCell>
                    <TableCell>
                      {order.configuration.caseModel?.toUpperCase()}
                    </TableCell>
                    <TableCell>
                      {order.configuration.caseMaterial?.toUpperCase()}
                    </TableCell>
                    <TableCell>
                      {order.configuration.caseFinish?.toUpperCase()}
                    </TableCell>
                    <TableCell className="font-medium">
                      ${order.configuration.basePrice}
                    </TableCell>
                    <TableCell className="font-medium">
                      ${order.configuration.totalPrice}
                    </TableCell>
                    <TableCell className="font-medium">
                      {order.paidType}
                    </TableCell>
                    <TableCell className="font-medium">
                      {new Date(order.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell className="font-medium">
                      <PhoneModal
                        casecolor={order.configuration.caseColor}
                        croppedImageUrl={order.configuration.croppedImageUrl}
                      />
                    </TableCell>
                    <TableCell>
                      <StatusUpdater
                        initialStatus={order.status}
                        orderId={order.id}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PhoneOrderPage;
