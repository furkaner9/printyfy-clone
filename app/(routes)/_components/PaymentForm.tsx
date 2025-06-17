import React from "react";

interface PaymentFormProps {
  configId: string;
  product: string; // "phone", "tshirt", "mug" gibi değerler alacak
}
const PaymentForm = ({ configId, product }: PaymentFormProps) => {
  return <div></div>;
};

export default PaymentForm;
