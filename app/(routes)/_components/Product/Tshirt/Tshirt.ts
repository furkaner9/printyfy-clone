export const TSHİRT_BASE_PRİCE = 18.0;

type TColor = {
  label: string;
  value: string;
  tw: string;
  twborder: string;
  timage: string;
};

export const TColor: TColor[] = [
  {
    label: "Black",
    value: "black",
    tw: "bg-black",
    twborder: "border-black",
    timage: "/tshirt/black.png",
  },
  {
    label: "White",
    value: "white",
    tw: "bg-white ",
    twborder: "border-white",
    timage: "/tshirt/white.png",
  },
  {
    label: "Red",
    value: "red",
    tw: "bg-red-500",
    twborder: "border-red-500",
    timage: "/tshirt/red.png",
  },
  {
    label: "Blue",
    value: "blue",
    tw: "bg-sky-500",
    twborder: "border-sky-500",
    timage: "/tshirt/blue.png",
  },
  {
    label: "Green",
    value: "green",
    tw: "bg-green-500",
    twborder: "border-green-500",
    timage: "/tshirt/green.png",
  },
];

type TSize = { label: string; value: string };

export const TSize: TSize[] = [
  { label: "S", value: "small" },
  { label: "M", value: "medium" },
  { label: "L", value: "large" },
  { label: "XL", value: "xlarge" },
];
