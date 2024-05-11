export const color = ["white", "black", "red", "maroon", "beige", "yellow"];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "white" },
      { value: "black", label: "black" },
      { value: "red", label: "red" },
      { value: "maroon", label: "maroon" },
      { value: "beige", label: "beige" },
      { value: "yellow", label: "yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "", label: "" },
    ],
  },
];

export const singlefilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "$159 To $399" },
      { value: "399-1199", label: "$399 To $1199" },
      { value: "1199-1599", label: "$1199 To $1599" },
      { value: "1599-2099", label: "$1599 To $2099" },
      { value: "2099-2599", label: "$2099 To $2599" },
      { value: "2599-3199", label: "$2599 To $3199" },
    ],
  },
  {
    id: "discount",
    name: "discount range",
    options: [
      {
        value: "10",
        label: "10 % and above",
      },
      { value: "20", label: "20 % and above" },
      { value: "30", label: "30 % and above" },
      { value: "40", label: "40 % and above" },
      { value: "50", label: "50 % and above" },
      { value: "60", label: "60 % and above" },
      { value: "70", label: "70 % and above" },
      { value: "80", label: "80 % and above" },
    ],
  },
  {
    id:"stock",
    name:"Availability",
    options:[
        {value:"in_stock",label:"In Stock"},
        {value:"ou_of_stock",label:"Out Of Stock"},
    ],
  },
];
