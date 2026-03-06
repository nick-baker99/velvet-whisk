type MenuItem = {
  name: string,
  description: string,
  quantity: string,
  image: string,
  slug: string,
  category: string,
  price?: number
} | null;

type Review = {
  name: string,
  customerType: string,
  comments: string,
  rating: number
};