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
