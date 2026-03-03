import React from 'react'
import starImage from '../assets/images/star.png';

type Props = {
  name: string,
  customerType: string,
  comments: string,
  rating: StarRange
};

const FeedbackBlock = ({ name, customerType, comments, rating }: Props) => {
  return (
    <article className="bg-white p-6 shadow-lg border border-[#F4F7D9] rounded-2xl hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-1 mb-6">
        {/* using rating to create a loop outputting the star icons */}
        {[...Array(rating)].map((x, i) => <img key={i} className="w-3 md:w-5 h-3 md:h-5" src={starImage} alt="star" />)}
      </div>
      <p className="text-xs sm:text-sm text-wood-700 opacity-90 mb-4.5"><i>"{comments}"</i></p>
      <hr className="text-burgundy-500 opacity-30 mb-6" />
      <p className="text-sm sm:text-md text-wood-700 mb-1.5">{name}</p>
      <p className="text-xs sm:text-sm text-wood-700 opacity-80">{customerType}</p>
    </article>
  )
}

export default FeedbackBlock