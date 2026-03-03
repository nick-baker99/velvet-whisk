import React, { useEffect, useState } from 'react'
import FeedbackBlock from './FeedbackBlock';
import reviewData from '../assets/data/reviews.json';
import { Link } from 'react-router';
import { BsArrowRight  } from "react-icons/bs";


const CustomerFeedback = () => {
  const positiveReviews: Array<Review> = reviewData.filter(review => review.rating === 5);
  let reviews: Array<Review> = [];
  for (let i = 0; i < 3; i++) {
    reviews.push(positiveReviews[Math.floor(Math.random() * positiveReviews.length)]);
  }

  return (
    <section className="bg-seashell-100 py-20 px-6">
      <div className="max-w-2xl lg:max-w-7xl mx-auto">
        <article className="max-w-3xl mx-auto text-center space-y-6 mb-6">
          <h2 className="text-3xl text-wood-700 font-bold">What Our Customers Say</h2>
          <p className="text-md text-wood-700 opacity-90">Don't just take our word for it - hear from our delighted customers who've experienced the Velvet Whisk difference.</p>
        </article>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {reviews.map((review, i) => (
            <FeedbackBlock 
              name={review.name}
              customerType={review.customerType}
              comments={review.comments}
              rating={review.rating}
            />
          ))}
        </div>
        <Link to="/reviews" className="w-fit text-xl flex mx-auto gap-2 items-center text-center text-burgundy-500 hover:text-burgundy-500/90 transition-opacity duration-300 font-semibold">
          All Reviews
          <BsArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}

export default CustomerFeedback