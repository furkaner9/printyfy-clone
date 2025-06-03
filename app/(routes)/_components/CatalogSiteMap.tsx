"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { set } from "zod";

interface CatalogSiteMap {
  params: {
    configId: string;
    product: string;
  };
}

const CatalogSiteMap = ({ params }: CatalogSiteMap) => {
  const pathname = usePathname();
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    {
      label: "Upload",
      href: `/catalog`,
      key: 1,
    },
    {
      label: "Product",
      href: `/catalog/${params.configId}`,
      key: 2,
    },
    {
      label: "Desing",
      href: `/catalog/${params.configId}/${params.product}`,
      key: 3,
    },
    {
      label: "Preview",
      href: `/catalog/${params.configId}/${params.product}/preview`,
      key: 4,
    },
    {
      label: "Checkout",
      href: `/catalog/${params.configId}/${params.product}/checkout`,
      key: 5,
    },
    {
      label: "Finish",
      href: `/order/${params.configId}`,
      key: 6,
    },
  ];
  useEffect(() => {
    const matchingStep = steps.findIndex((step) => step.href === pathname);
    if (matchingStep !== -1) {
      setCurrentStep(matchingStep + 1);
    }
  }, [pathname, steps]);

  return <div></div>;
};

export default CatalogSiteMap;
