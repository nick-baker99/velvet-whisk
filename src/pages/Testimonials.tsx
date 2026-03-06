import HeroBanner from "../components/HeroBanner";
import bannerImg from "../assets/images/birthday-party.jpg";
import reviewData from "../assets/data/reviews.json";
import FeedbackBlock from "../components/FeedbackBlock";
import React, { useState } from "react";
import starImage from '../assets/images/star.png';


const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    customerType: '',
    rating: 0,
    review: ''
  });

  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const starRatings: Array<number> = [1, 2, 3, 4, 5];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');

    if (!formData.rating) {
      setFormError('Please select a rating');
      return;
    }

    setFormSuccess('Your feedback has been submitted, thank you!');
  }

  return (
    <div className="bg-seashell-100">
      <HeroBanner 
        title="Hear What Others Have to Say"
        subTitle="Don't just listen to us. Hear what our customers think."
        bgImage={bannerImg}
      />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-xl text-wood-700 font-semibold mb-3">Leave Us a Review</h2>
        <p className="text-wood-700 text-lg mb-3">We value our customer's feedback. Please leave us a review and tell us what you thought.</p>
        {formSuccess ? (
          <span className="inline-block text-green-700 mb-8">{formSuccess}</span>
        ) : (
          <form className="mb-8" onSubmit={handleSubmit}>
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col md:flex-row gap-0 md:gap-4">
                <label className="text-wood-700 font-semibold mb-3 flex flex-col gap-2 flex-1">
                  Your Name*
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={({ target }) => setFormData({ ...formData, name: target.value })} 
                    placeholder="Your name" 
                    className="text-sm bg-lightpink-100 border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2"
                    required
                  />
                </label>
                <label className="text-wood-700 font-semibold mb-3 flex flex-col gap-2 flex-1">
                  Company Name
                  <input 
                    type="text" 
                    value={formData.company} 
                    onChange={({ target }) => setFormData({ ...formData, company: target.value })} 
                    placeholder="Company name" 
                    className="text-sm bg-lightpink-100 border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2"
                  />
                </label>
              </div>
              <label className="text-wood-700 font-semibold mb-3 flex flex-col gap-2">
                Email Address*
                <input 
                  type="email" 
                  value={formData.email} 
                  onChange={({ target }) => setFormData({ ...formData, email: target.value })} 
                  placeholder="Email address" 
                  className="text-sm bg-lightpink-100 border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2"
                  required
                />
              </label>
              <label className="text-wood-700 font-semibold mb-3 flex flex-col gap-2">
                Rating*
                <div className="flex gap-2">
                  {starRatings.map(value => (
                    <label key={value} style={{ cursor: "pointer" }}>
                      <input
                        type="radio"
                        name="rating"
                        value={value}
                        onChange={() => setFormData({ ...formData, rating: value })}
                        className="hidden"
                      />
            
                      <img
                        src={starImage}
                        alt={`${value} star`}
                        className={`w-6 h-6 transition-opacity`}
                        style={{ opacity: value <= formData.rating ? 1 : 0.4 }}
                      />
                    </label>
                  ))}
                </div>
              </label>
              <label className="text-wood-700 font-semibold mb-5 flex flex-col gap-2">
                Review*
                <textarea 
                  id="review" 
                  className="max-w-full max-h-90 min-h-10 text-sm bg-lightpink-100 border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2"
                  onChange={({ target }) => setFormData({ ...formData, review: target.value })}
                  placeholder="Write your review..."
                  value={formData.review}
                  required
                ></textarea>
              </label>
              {formError && <span className="inline-block text-red-600 mb-4">{formError}</span>}
              
              <button className="text-md flex items-center gap-3 hover:gap-4 w-fit bg-burgundy-500 hover:bg-burgundy-600 px-5 py-3.5 text-white rounded-lg transition-all duration-200">Submit Review</button>
            </div>
          </form>
        )}
        <h2 className="text-xl text-wood-700 font-semibold mb-4">Reviews</h2>
        {reviewData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviewData.map((review, i) => (
              <FeedbackBlock
                key={i}
                name={review.name}
                customerType={review.customerType}
                comments={review.comments}
                rating={review.rating}
              />
            ))}
          </div>
        ) : (
          <p className="text-lg text-wood-700">No reviews to display. Be the first to leave us a review.</p>
        )}
        
      </div>
    </div>
  )
}

export default Testimonials