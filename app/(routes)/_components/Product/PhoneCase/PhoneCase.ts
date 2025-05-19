export const PHONE_PRİCE = {
  material: {
    silicone: 0,
    polycarbonate: 7_00,
  },
  finish: {
    smooth: 0,
    texttured: 4_00,
  },
} as const;

export const PHONE_BASE_PRİCE = 12_00;

type Color = { label: string; value: string; tw: string };

export const COLORS: Color[] = [
  {
    label: "Black",
    value: "black",
    tw: "zinc-900",
  },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
  {
    label: "Rose",
    value: "rose",
    tw: "rose-950",
  },
];

type Model = { label: string; value: string };

export const MODEL: Model[] = [
  { label: "İPhone X", value: "iphonex" },
  { label: "İPhone 11", value: "iphone11" },
  { label: "İPhone 12", value: "iphone12" },
  { label: "İPhone 13", value: "iphone13" },
  { label: "İPhone 14", value: "iphone14" },
  { label: "İPhone 15", value: "iphone15" },
];

type Option = {
  label: string;
  value: string;
  descriptions?: string;
  price: number;
};

type Group = {
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
        price: PHONE_PRİCE.material.silicone,
      },
      {
        label: "Sort Polycarbonate",
        value: "polycarbonate",
        descriptions: "Scratch-resistant-coating",
        price: PHONE_PRİCE.material.polycarbonate,
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
        price: PHONE_PRİCE.finish.smooth,
      },
      {
        label: "Textured Finish",
        value: "textured",
        descriptions: "Soft grippy textured",
        price: PHONE_PRİCE.finish.texttured,
      },
    ],
  },
];
