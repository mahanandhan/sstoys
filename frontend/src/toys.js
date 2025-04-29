// toys.js
import reactsvg from "./assets/react.svg";

const toys = [
  {
    id: 1,
    name: "Teddy Bear",
    price: 20,
    description: "Soft and cuddly teddy bear perfect for all ages.",
    image: reactsvg, // using imported image
  },
  {
    id: 2,
    name: "Remote Control Car",
    price: 35,
    description: "High-speed remote control car with rechargeable battery.",
    image: reactsvg, // using same image for demo
  },
  {
    id: 3,
    name: "Lego Building Set",
    price: 50,
    description: "Creative building set with 500+ colorful bricks.",
    image: reactsvg,
  },
  {
    id: 4,
    name: "Doll House",
    price: 60,
    description: "Beautiful wooden doll house with furniture included.",
    image: reactsvg,
  },
  {
    id: 5,
    name: "Puzzle Game",
    price: 15,
    description: "500-piece jigsaw puzzle for family fun.",
    image: reactsvg,
  }
];

export default toys;
