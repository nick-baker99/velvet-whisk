declare namespace JSX {
  export import IntrinsicElements = React.JSX.IntrinsicElements
  export import Element = React.JSX.Element
}

type MenuItem = {
  name: string,
  description: string,
  quantity: string,
  image: string,
  slug: string,
  category: string,
  price?: number
} | null;

type StarRange = 0 | 1 | 2 | 3 | 4 | 5;

type Review = {
  name: string,
  customerType: string,
  comments: string,
  rating: StarRange
};
