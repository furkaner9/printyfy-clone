import { title } from "process";

type RouteProps = {
  id: number;
  href: string;
  title: string;
}[];

export const routes: RouteProps = [
  {
    id: 1,
    href: "/catalog",
    title: "Catalog",
  },
  {
    id: 2,
    href: "/how-it-works",
    title: "How it works",
  },
  {
    id: 3,
    href: "/pricing",
    title: "Pricing",
  },
  {
    id: 4,
    href: "/contacts",
    title: "Need help?",
  },
];

type ServiceProps = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export const services: ServiceProps[] = [
  {
    id: 1,
    image: "/services/1.png",
    title: "Higher Profits",
    description:
      "Maximize your earnings with our streamlined design-to-sell platform. Our tools help reduce production costs and boost your profit margins effortlessly.",
  },
  {
    id: 2,
    image: "/services/2.png",
    title: "Robust Scaling",
    description:
      "Whether you're just starting out or managing a large store, our platform grows with you. Easily handle increased demand without sacrificing speed or quality.",
  },
  {
    id: 3,
    image: "/services/3.png",
    title: "Best Selection",
    description:
      "Offer your customers a wide range of high-quality customizable products—from phone cases to apparel—designed to fit every style and preference.",
  },
];

type ProductType = {
  id: number;
  image: string;
  title: string;
  href: string;
};

export const products: ProductType[] = [
  {
    id: 1,
    image: "/product/1.jpg",
    title: "Phone",
    href: "phone",
  },
  {
    id: 2,
    image: "/product/2.jpg",
    title: "T-shirt",
    href: "tshirt",
  },
  {
    id: 3,
    image: "/product/3.jpg",
    title: "Mug",
    href: "mug",
  },
];
