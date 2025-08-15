// importing type
import type { Product } from "../types/index";

export const products: Product[] = [
  {
    id: "1",
    title: "Product name",
    image: "/products/product-1.jpg",
    location: "sample address",
    date: "July 10",
    price: "230000",
  },
  {
    id: "2",
    title: "Car",
    image: "/products/product-1.jpg",
    location: "Dubai",
    date: "July 10",
    price: "30000",
    isFeaturedProduct: true,
  },
];

// In future this data fetch through api
