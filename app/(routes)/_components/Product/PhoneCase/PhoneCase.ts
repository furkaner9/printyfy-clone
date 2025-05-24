export const PHONE_PRICE = {
  material: {
    silicone: 0,
    polycarbonate: 7.00,
  },
  finish: {
    smooth: 0,
    textured: 4.00,
  },
} as const;

export const PHONE_BASE_PRICE = 12.00;

type Color = { label: string; value: string; tw: string };

export const COLORS: Color[] = [
  {
    label: "Black",
    value: "black",
    tw: "bg-zinc-900",
  },
  {
    label: "Blue",
    value: "blue",
    tw: "bg-blue-950",
  },
  {
    label: "Rose",
    value: "rose",
    tw: "bg-rose-950",
  },
  {
    label: "Yellow",
    value: "yellow",
    tw: "bg-yellow-200",
  },
];

type Model = { label: string; value: string };

export const MODEL: Model[] = [
  { label: "iPhone X", value: "iphonex" },
  { label: "iPhone 11", value: "iphone11" },
  { label: "iPhone 12", value: "iphone12" },
  { label: "iPhone 13", value: "iphone13" },
  { label: "iPhone 14", value: "iphone14" },
  { label: "iPhone 15", value: "iphone15" },
];

type Option = {
  label: string;
  value: string;
  descriptions?: string;
  price: number;
};

export type Group = {
  name: string;
  options: Option[];
};

export const MATERIALS: Group[] = [
  {
    name: "material",
    options: [
      {
        label: "Silicone",
        value: "silicone",
        descriptions: undefined,
        price: PHONE_PRICE.material.silicone,
      },
      {
        label: "Sort Polycarbonate",
        value: "polycarbonate",
        descriptions: "Scratch-resistant-coating",
        price: PHONE_PRICE.material.polycarbonate,
      },
    ],
  },
];

export const FINISHES: Group[] = [
  {
    name: "finish",
    options: [
      {
        label: "Smooth Finish",
        value: "smooth",
        descriptions: undefined,
        price: PHONE_PRICE.finish.smooth,
      },
      {
        label: "Textured Finish",
        value: "textured",
        descriptions: "Soft grippy textured",
        price: PHONE_PRICE.finish.textured,
      },
    ],
  },
];
