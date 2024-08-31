import moment from "moment";

const topTrips = [
  {
    title: "Bedugul Bali Tour",
    category: "chill",
    type: "success",
    lengthTour: "2 Days, 1 night",
    date: moment().toISOString(),
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698628237128.jpg",
    price: 45,
  },
  {
    title: "Activity Tour",
    category: "relax",
    type: "danger",
    lengthTour: "2 Days, 1 night",
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698683776840.jpg",
    date: moment().toISOString(),
    price: 110,
  },
  {
    title: "Nusa Penida",
    category: "chill",
    type: "success",
    lengthTour: "2 Days, 1 night",
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698684178334.jpg",
    date: moment().toISOString(),
    price: 135,
  },
];

export { topTrips };
