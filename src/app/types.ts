export interface Tile {
  title: string;
  image: string;
  url: string;
}

export interface Product {
  image: string;
  name: string;
  price: number;
  type: string;
}

export interface User {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  dob: string;
  role: string[];
  cart?: string[]
  order?: string[];
}