import { useState } from "react";
import { Link, Links, useLoaderData, useParams } from "react-router";
import menuData from "../assets/data/menu.json";
import PageNotFound from "./PageNotFound";
import { BsArrowRight  } from "react-icons/bs";
import starImage from '../assets/images/star.png';
import reviewsData from '../assets/data/reviews.json';
import FeedbackBlock from "../components/FeedbackBlock";

type StarRange = 0 | 1 | 2 | 3 | 4 | 5;

const Product = () => {
  // data load provides the product data
  const product: MenuItem = useLoaderData();

  // product not found
  if (!product) {
    return (
      <div className="h-full p-6 py-50 flex flex-col justify-center items-center align-center">
        <h1 className="text-9xl text-wood-700">404</h1>
        <h2 className="text-4xl text-wood-700 font-semibold mb-6">This item is no longer available</h2>
        <p className="text-lg text-wood-700 mb-8">The menu item you were looking for is no longer available. Head back to our menu page to see the full selection.</p>
        <Link to="/menu" className="bg-burgundy-500 hover:bg-burgundy-600 text-white text-lg font-semibold px-6 py-3 transition-colors duration-300">Our Menu</Link>
      </div>
    );
  }

  // load dynamic image
  const image = new URL(
    `../assets/images/treats/${product.image}`,
    import.meta.url,
  ).href;

  const positiveReviews: Array<Review> = reviewsData.filter(review => review.rating > 3);
  let reviews: Array<Review> = [];
  for (let i = 0; i < 12; i++) {
    reviews.push(positiveReviews[Math.floor(Math.random() * positiveReviews.length)]);
  }

  return (
    <div className="bg-seashell-100 py-8">
      <div className="max-w-5/6 mx-auto">
        <section className="flex items-center gap-8 py-16">
          <img 
            src={image} 
            alt={product.name} 
            className="w-1/2 max-h-120 object-cover rounded-2xl"
          />
          <div className="w-1/2 flex flex-col justify-center p-6">
            <h1 className="text-4xl text-wood-700 font-bold mb-6">{product.name}</h1>
            <div className="flex gap-1 mb-6 [&_img]:w-5 [&_img]:h-5">
              <img src={starImage} alt="full star" />
              <img src={starImage} alt="full star" />
              <img src={starImage} alt="full star" />
              <img src={starImage} alt="full star" />
              <img src={starImage} alt="full star" />
              <span className="text-wood-700 ml-2 opacity-90">112 Reviews</span>
            </div>
            <div className="mb-6">
              <span className="text-lg text-wood-700 font-bold block mb-2">Description</span>
              <p className="text-xl text-wood-700 opacity-90">{product.description}</p>
            </div>
            <div className="mb-6">
              <span className="text-lg text-wood-700 font-bold block mb-2">Quantity</span>
              <p className="w-fit bg-lightpink-200 text-wood-700 px-4 py-2">{product.quantity}</p>
            </div>
            <div className="mb-6">
              <span className="text-lg text-wood-700 font-bold block mb-2">Price</span>
              <p className="w-fit bg-lightpink-200 text-wood-700 px-4 py-2">£{product.price}</p>
            </div>
            <Link to="/order" className="text-md flex items-center gap-3 hover:gap-4 w-fit bg-burgundy-500 hover:bg-burgundy-600 px-5 py-3.5 text-white rounded-lg transition-all duration-200">
            Place a Custom Order
            <BsArrowRight className="w-5 h-5" />
          </Link>
          </div>
        </section>
        <hr className="max-w-7xl mx-auto text-burgundy-500 my-4 opacity-40" />
        <section className="max-w-7xl mx-auto py-6">
          <h2 className="text-xl text-wood-700 font-bold mb-4">Reviews</h2>
          <Link to="/testimonials" className="text-burgundy-500 font-semibold mb-4 inline-block">See All Reviews</Link>
          <div className="grid grid-cols-3 gap-5">
            {reviews.map(review => (
              <FeedbackBlock
                name={review.name}
                customerType={review.customerType}
                comments={review.comments}
                rating={review.rating}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Product