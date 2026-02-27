import React, { useState } from 'react';
import { BsArrowRight  } from "react-icons/bs";

type Props = {
  title: string,
  description: string,
  imageFile: string,
  slug: string,
  quantity?: string | null,
  price?: number | null
};

const MenuItem = ({ title, description, imageFile, slug, quantity = null, price = null }: Props) => {
  // load dynamic image
  const image = new URL(
    `../assets/images/treats/${imageFile}`,
    import.meta.url,
  ).href;

  return (
    <article className="flex flex-col bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-[#F4F7D9] rounded-2xl overflow-hidden group">
      <div className="overflow-hidden h-76">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex flex-col grow p-4">
        <h3 className="text-xl text-wood-700 font-bold mb-3">{title}</h3>
        <p className="text-md text-wood-700 opacity-90 mb-6">{description}</p>
        <div className="flex justify-between gap-2 flex-wrap mt-auto">
          <a className="flex items-center gap-2 text-md text-burgundy-500 hover:opacity-90 transition-opacity" href={`/menu/${slug}`}>
            Learn More
            <BsArrowRight />
          </a>
          <span className="text-sm text-wood-700 opacity-80">
            {price ? `£${price} / ` : ''}
            {quantity ?? ''}
          </span>
        </div>
      </div>
    </article>
  );
}

export default MenuItem