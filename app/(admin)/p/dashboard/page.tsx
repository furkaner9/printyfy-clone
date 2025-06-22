import { prismadb } from "@/lib/prismadb";
import React from "react";
import Widget from "../../_components/Widget";
import { Key } from "lucide-react";

const DashboardPage = async () => {
  try {
    const totalConfigurations = await prismadb.configuration.count();
    const totalOrders = await prismadb.order.count();
    const iyzicoPayment = await prismadb.order.count({
      where: {
        paidType: "iyzico",
        isPaid: true,
      },
    });
    const stripePayment = await prismadb.order.count({
      where: {
        paidType: "stripe",
        isPaid: true,
      },
    });

    const Widgetdata = [
      { label: "Total Configurations", value: totalConfigurations ?? 0 },
      { label: "Total Orders", value: totalOrders ?? 0 },
      { label: "Iyzico Payment", value: iyzicoPayment ?? 0 },
      { label: "Stripe Payment ", value: stripePayment ?? 0 },
    ];
    console.log("Widgetdata:", Widgetdata);

    return (
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Widgetdata.map((data) => (
            <Widget key={data.label} label={data.label} value={data.value} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Dashboard fetch error:", error);
    return <div>Failed to load dashboard data.</div>;
  }
};

export default DashboardPage;
