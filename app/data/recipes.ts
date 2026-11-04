export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  minutes: number;
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Margherita Pizza",
    cuisine: "Italian",
    minutes: 30,
    description: "A delicious pizza with cheese and fresh tomatoes.",
  },
  {
    id: "2",
    title: "Veg Fried Rice",
    cuisine: "Chinese",
    minutes: 20,
    description: "Tasty fried rice with fresh vegetables.",
  },
  {
    id: "3",
    title: "Masala Dosa",
    cuisine: "Indian",
    minutes: 25,
    description: "Crispy dosa filled with spicy potato masala.",
  },
  {
    id: "4",
    title: "Pasta Alfredo",
    cuisine: "Italian",
    minutes: 35,
    description: "Creamy pasta with a delicious white sauce.",
  },
];