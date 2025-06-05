import React from "react";
import CatalogSiteMap from "../_components/CatalogSiteMap";

interface CatalogLayoutProps {
  children: React.ReactNode;
  params: {
    configId: string;
    product: string;
  };
}

const CatalogLayout = ({ children, params }: CatalogLayoutProps) => {
  return (
    <>
      <CatalogSiteMap params={params} />
      {children}
    </>
  );
};

export default CatalogLayout;
