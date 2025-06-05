"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface CatalogSiteMapProps {
  params: {
    configId: string;
    product: string;
  };
}

const CatalogSiteMap = ({ params }: CatalogSiteMapProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { label: "Upload", href: `/catalog`, key: 1 },
    { label: "Product", href: `/catalog/${params.configId}`, key: 2 },
    {
      label: "Design",
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
    { label: "Finish", href: `/order/${params.configId}`, key: 6 },
  ];

  useEffect(() => {
    const normalizedPathname =
      pathname.endsWith("/") && pathname.length > 1
        ? pathname.slice(0, -1)
        : pathname;

    let matchingStep = steps.findIndex((step) => {
      const normalizedHref =
        step.href.endsWith("/") && step.href.length > 1
          ? step.href.slice(0, -1)
          : step.href;
      return normalizedPathname === normalizedHref;
    });

    if (matchingStep === -1) {
      matchingStep = steps.findIndex((step) =>
        normalizedPathname.startsWith(step.href)
      );
    }

    if (matchingStep !== -1) {
      setCurrentStep(matchingStep + 1);
    }
  }, [pathname]);

  const handleStepClick = (href: string, stepKey: number) => {
    if (stepKey <= currentStep) {
      router.push(href);
    }
  };

  return (
    <header className="pt-5">
      <ProgressBar currentStep={currentStep} />
      <nav className="flex justify-center items-center space-x-8 mt-4">
        {steps.map((step) => (
          <StepItem
            key={step.key}
            number={step.key}
            label={step.label}
            href={step.href}
            isActive={currentStep === step.key}
            isClickable={step.key <= currentStep}
            onClick={() => handleStepClick(step.href, step.key)}
          />
        ))}
      </nav>
    </header>
  );
};

const ProgressBar = ({ currentStep }: { currentStep: number }) => {
  const progress = (currentStep / 6) * 100;
  return (
    <div className="relative mb-5 w-2/3 mx-auto mt-6">
      <Progress value={progress} />
    </div>
  );
};

const StepItem = ({
  number,
  label,
  href,
  isActive,
  isClickable,
  onClick,
}: {
  number: number;
  label: string;
  href: string;
  isActive: boolean;
  isClickable: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`flex flex-col items-center select-none ${
        isClickable
          ? "cursor-pointer hover:text-blue-600"
          : "cursor-default text-gray-400"
      }`}
      title={label}
      tabIndex={isClickable ? 0 : -1}
      role="button"
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && isClickable) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div
        className={cn(
          "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer",
          isActive
            ? "bg-mycolor text-white"
            : isClickable
            ? "bg-gray-300 text-gray-600"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        )}
      >
        {number}
      </div>
      <span
        className={`text-sm ${
          isActive ? "font-bold text-blue-700" : "text-gray-600"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default CatalogSiteMap;
