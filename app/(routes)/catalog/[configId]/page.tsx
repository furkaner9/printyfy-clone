import React from "react";

interface ConfigPageProps {
  params: {
    configId: string;
  };
}

const ConfigPage = ({ params }: ConfigPageProps) => {
  return <div>{params.configId}</div>;
};

export default ConfigPage;
