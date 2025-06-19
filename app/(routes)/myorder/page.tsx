import React from "react";

import { currentUser } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import { prismadb } from "@/lib/prismadb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MyorderPage = async () => {
  const user = await currentUser();
  if (!user) {
    return notFound();
  }
  const orderDb = await prismadb.order.findMany({
    where: {
      userId: user.id,
    },
    include: {
      configuration: true,
    },
  });
  const phoneCases = orderDb.filter(
    (order) => order.configuration.type === "phoneCase"
  );
  const mugs = orderDb.filter((order) => order.configuration.type === "mug");
  const tshirts = orderDb.filter(
    (order) => order.configuration.type === "tshirt"
  );

  return (
    <div className="container mx-auto mt-16">
      <div className="space-y-12">
        {phoneCases.length > 0 && (
          <>
            <h2 className="text-2xl text-center font-semibold">Phone Case</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Case Colour</TableHead>
                  <TableHead>Case Model</TableHead>
                  <TableHead>Case Finish</TableHead>
                  <TableHead>Case Material</TableHead>
                  <TableHead>Base Price</TableHead>
                  <TableHead>Total Price</TableHead>
                  <TableHead>Payment Type</TableHead>
                  <TableHead>Payment Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {phoneCases.map((order) => (
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
        {mugs.length > 0 && (
          <>
            <h2 className="text-2xl text-center font-semibold">Mug</h2>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Mug Colur</TableHead>
                  <TableHead>Base Price</TableHead>
                  <TableHead>Total Price</TableHead>
                  <TableHead>Payment Type</TableHead>
                  <TableHead>Payment Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mugs.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">Mug</TableCell>
                    <TableCell>
                      {order.configuration.mugColor?.toUpperCase()}
                    </TableCell>
                    <TableCell className="font-medium">
                      ${order.configuration.totalPrice}
                    </TableCell>
                    <TableCell className="font-medium">
                      ${order.configuration.basePrice}
                    </TableCell>
                    <TableCell className="font-medium">
                      {order.paidType}
                    </TableCell>
                    <TableCell className="font-medium">
                      {new Date(order.createdAt).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
        {tshirts.length > 0 && (
          <>
            <h2 className="text-2xl text-center font-semibold">T-shirt</h2>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Color</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Base Price</TableHead>
                  <TableHead>Total Price</TableHead>
                  <TableHead>Payment Type</TableHead>
                  <TableHead>Payment Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tshirts.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">T-shirt</TableCell>
                    <TableCell>
                      {order.configuration.tshirtcolor?.toUpperCase()}
                    </TableCell>
                    <TableCell>
                      {order.configuration.size?.toUpperCase()}
                    </TableCell>

                    <TableCell className="font-semibold">
                      ${order.configuration.basePrice}
                    </TableCell>
                    <TableCell className="font-semibold">
                      ${order.configuration.totalPrice}
                    </TableCell>
                    <TableCell className="font-semibold">
                      {order.paidType}
                    </TableCell>
                    <TableCell className="font-semibold">
                      {new Date(order.createdAt).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
        {orderDb.length === 0 && (
          <p className="text-center text-lg text-gray-500 mt-10">
            Henüz hiçbir siparişiniz bulunmamaktadır.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyorderPage;
