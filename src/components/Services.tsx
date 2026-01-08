import React from 'react';
import { BsHeart, BsPatchCheck, BsClock } from "react-icons/bs";
import Service from './Service';

const Services = () => {

  return (
    <section className="bg-seashell-100 py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <article className="max-width-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold text-wood-700">About Velvet Whisk</h2>
          <p className="text-md text-wood-700 max-w-2xl mx-auto">Founded with a passion for creating memorable moments through exceptional baked goods, Velvet Whisk has become a beloved destination for sweet treat enthusiasts. Our commitment to quality and artistry shines through in every creation.</p>
        </article>
        <div className="max-w-2xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <Service 
            Icon={BsHeart}
            title="Made with Love"
            description="Every treat is crafted with care and passion using traditional recipes passed down through generations."
          />
          <Service 
            Icon={BsPatchCheck}
            title="Premium Ingredients"
            description="We source only the finest ingredients to ensure every bite is a taste of excellence."
          />
          <Service 
            Icon={BsClock}
            title="Fresh Daily"
            description="All our products are baked fresh daily to guarantee maximum flavor and quality."
          />
        </div>
      </div>
    </section>
  )
}

export default Services