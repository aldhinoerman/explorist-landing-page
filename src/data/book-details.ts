import moment from "moment";

const bookDetails = [
  {
    key: "nusa-dua-uluatu",
    title: "Nusa Dua Uluatu",
    location: "Badung, Bali, Indonesia",
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698683331633.jpg",
    activity:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    terms:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    itinerary: [
      {
        time: moment().toISOString(),
        description: "",
      },
      {
        time: moment().toISOString(),
        description: "",
      },
    ],
    pricing: {
      inclusion: [
        {
          pax: 2,
          price: 150,
        },
        {
          pax: 4,
          price: 250,
        },
      ],
      regular: [
        {
          car: "Hiace",
          price: 50,
        },
        {
          car: "Avanza",
          price: 100,
        },
      ],
    },
    regular_items: ["Gas"],
    inclusion_items: ["Tickets", "Meal"],
  },
];

export { bookDetails };
