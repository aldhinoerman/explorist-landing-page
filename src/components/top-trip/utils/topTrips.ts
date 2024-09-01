import moment from "moment";

const topTrips = [
  {
    title: "Best Adventure",
    category: "chill",
    type: "success",
    lengthTour: "2 Days, 1 night",
    date: moment().toISOString(),
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698683776840.jpg",
    price: 110,
    link: "#activity",
  },
  {
    title: "Best in Bali",
    category: "relax",
    type: "danger",
    lengthTour: "2 Days, 1 night",
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698628237128.jpg",
    date: moment().toISOString(),
    price: 45,
    link: "package/bali",
  },
  {
    title: "Best Nusa Penida",
    category: "chill",
    type: "success",
    lengthTour: "2 Days, 1 night",
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698684178334.jpg",
    date: moment().toISOString(),
    price: 135,
    link: "package/nusa-penida",
  },
];

export { topTrips };
