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
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in .",
  },
  {
    id: 2,
    image: "/services/2.png",
    title: "Robust Scaling",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in .",
  },
  {
    id: 3,
    image: "/services/3.png",
    title: "Best Selection",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in .",
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
    image: "/product/1.png",
    title: "Phone",
    href: "phone",
  },
  {
    id: 2,
    image: "/product/2.png",
    title: "T-shirt",
    href: "tshirt",
  },
  {
    id: 3,
    image: "/product/3.png",
    title: "Mug",
    href: "mug",
  },
];
