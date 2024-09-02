const itemPackages = [
  {
    title: "Explore Nusa Dua Uluatu",
    key: "nusa-dua-uluatu",
    packages: ["uluwatu", "bali", "south-bali", "activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698683331633.jpg",
    price: 75,
  },
  {
    title: "Explore Ubud A",
    key: "explore-ubud-a",
    packages: ["ubud", "activity"],
    pict: "https://cdn.pixabay.com/photo/2017/04/26/11/02/quad-2262332_960_720.jpg",
    price: 150,
  },
  {
    title: "Explore Ubud B",
    key: "explore-ubud-b",
    packages: ["ubud", "activity"],
    pict: "https://cdn.pixabay.com/photo/2018/06/30/00/13/tubing-3506869_1280.jpg",
    price: 150,
  },
  {
    title: "Explore Ubud C",
    key: "explore-ubud-c",
    packages: ["ubud", "activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698628237089.jpg",
    price: 150,
  },
  {
    title: "Explore Ubud D",
    key: "explore-ubud-d",
    packages: ["ubud", "activity"],
    pict: "https://cdn.pixabay.com/photo/2018/01/26/20/23/saber-3109719_960_720.jpg",
    price: 105,
  },
  {
    title: "Ubud Family Fun",
    key: "explore-family-fun",
    packages: ["ubud", "activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/IMG_20231030_075214.jpg",
    price: 110,
  },
  {
    title: "Water Sport A",
    key: "water-sport-a",
    packages: ["water-sport", "activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698645974707.jpg",
    price: 105,
  },
  {
    title: "Water Sport B",
    key: "water-sport-a",
    packages: ["water-sport", "activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698645974707.jpg",
    price: 100,
  },
  {
    title: "Water Sport C",
    key: "water-sport-c",
    packages: ["water-sport", "activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698645974707.jpg",
    price: 105,
  },
  {
    title: "Batur Trekking",
    key: "batur-trekking",
    packages: ["kintamani", "activity"],
    pict: "https://cdn.pixabay.com/photo/2013/08/26/09/40/silhouette-175970_1280.jpg",
    price: 70,
  },
  {
    title: "Jeep Batur Sunrise",
    key: "batur-sunrise",
    packages: ["kintamani", "activity"],
    pict: "https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg",
    price: 80,
  },
  {
    title: "ATV Ride",
    key: "atv",
    packages: ["activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698683776840.jpg",
    price: 65,
  },
  {
    title: "Rafting",
    key: "rafting",
    packages: ["activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698650320310.jpg",
    price: 45,
  },
  {
    title: "Night Safari",
    key: "night-safari",
    packages: ["activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/night-safari-1024x683.jpg",
    price: 80,
  },
  {
    title: "Elephant Back Safari",
    key: "elephant-safari",
    packages: ["activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/elephant-back-safari-1024x614.jpg",
    price: 90,
  },
  {
    title: "Jungle Hooper",
    key: "jungle-hooper",
    packages: ["activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/junggle-hooper.jpg",
    price: 60,
  },
  {
    title: "Zoo Explorer",
    key: "zoo-explorer",
    packages: ["activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/13201-1024x683-1.webp",
    price: 65,
  },
  {
    title: "Breakfast With Orangutan",
    key: "orangutan",
    packages: ["activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1201-1024x791-1.webp",
    price: 70,
  },
  {
    title: "Elephant Mud Fun",
    key: "elephant-mud",
    packages: ["activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/8201-1024x683-1.webp",
    price: 115,
  },
  {
    title: "Elephant Expedition",
    key: "elephant-expedition",
    packages: ["activity"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/11201-1024x683-1.webp",
    price: 115,
  },
  {
    title: "Dolphin Lovina",
    key: "lovina",
    packages: ["activity"],
    pict: "https://cdn.pixabay.com/photo/2013/02/10/00/19/dusky-dolphin-79850_960_720.jpg",
    price: 55,
  },
  {
    title: "Cycling",
    key: "cycling",
    packages: ["activity"],
    pict: "https://cdn.pixabay.com/photo/2020/10/17/10/11/bicycles-5661632_960_720.jpg",
    price: 50,
  },
  {
    title: "Snorkling Blue Lagoon",
    key: "blue-lagoon",
    packages: ["activity"],
    pict: "https://cdn.pixabay.com/photo/2013/02/08/16/44/snorkle-79385_1280.jpg",
    price: 60,
  },
  {
    title: "Snorkling Gili Island",
    key: "gili-island",
    packages: ["activity"],
    pict: "https://cdn.pixabay.com/photo/2017/11/14/18/27/island-2949520_1280.jpg",
    price: 110,
  },
  {
    title: "River Tubing",
    key: "river-tubing",
    packages: ["activity"],
    pict: "https://cdn.pixabay.com/photo/2018/06/30/00/13/tubing-3506869_1280.jpg",
    price: 50,
  },
  {
    title: "Surfing Lesson",
    key: "surfing",
    packages: ["activity"],
    pict: "https://cdn.pixabay.com/photo/2020/05/03/17/20/surf-5125937_1280.jpg",
    price: 50,
  },
  {
    title: "Explore Bedugul & Hidden Hill",
    key: "bedugul-hidden-hill",
    packages: ["bedugul", "bali"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/woman-walking-big-entrance-gate-bali-indonesia-1024x683.jpg",
    price: 45,
  },
  {
    title: "Explore Best East Bali",
    key: "best-east-bali",
    packages: ["east-bali", "bali"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/young-woman-standing-temple-gates-lempuyang-luhur-temple-bali-indonesia-vintage-tone-1024x683.jpg",
    price: 75,
  },
  {
    title: "Nusa Penida Combined Trip",
    key: "nusa-penida-combined",
    packages: ["nusa-penida", "bali"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698684178334.jpg",
    price: 90,
  },
  {
    title: "West Nusa Penida",
    key: "west-nusa-penida",
    packages: ["nusa-penida", "bali"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698645974693.jpg",
    price: 80,
  },
  {
    title: "East Nusa Penida",
    key: "east-nusa-penida",
    packages: ["nusa-penida", "bali"],
    pict: "https://friendlybalitour.com/wp-content/uploads/2023/10/1698645974678.jpg",
    price: 80,
  },
];

export { itemPackages };
