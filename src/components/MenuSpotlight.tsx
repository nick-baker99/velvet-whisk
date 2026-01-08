import React from 'react'
import MenuItem from './MenuItem';
import cupcakesImage from '../assets/images/treats/cupcakes.jpg';

const MenuSpotlight = () => {
  return (
    <section className="py-20 px-6 bg-linear-to-t from-seashell-100 to-lightpink-100">
      <div className="max-w-2xl lg:max-w-7xl mx-auto">
        <article className="max-w-3xl mx-auto text-center space-y-6 mb-6">
          <h2 className="text-3xl text-wood-700 font-bold">Our Sweat Treats</h2>
          <p className="text-md text-wood-700 opacity-90">Discover our carefully curated selection of handcrafted delights, each made with the finest ingredients and a touch of magic.</p>
        </article>
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <MenuItem 
            title="Artisan Cupcakes"
            description="Delicate, moist cupcakes with handcrafted frosting in a variety of flavors."
            image={cupcakesImage}
            slug="artisan-cupcakes"
          />
          <MenuItem 
            title="French Macarons"
            description="Light, airy almond meringue cookies with luscious ganache fillings."
            image="macaron.jpg"
            slug="french-macarons"
          />
          <MenuItem 
            title="Signature Cakes"
            description="Stunning layered cakes perfect for any celebration or special occasion."
            image="cake-selection.jpg"
            slug="signature-cakes"
          />
          <MenuItem 
            title="Gourmet Cookies"
            description="Crispy on the outside, chewy on the inside, made with premium chocolate."
            image="pastries.jpg"
            slug="gourmet-cookies"
          />
        </div>
        <a href="#treats" className="w-fit text-xl flex mx-auto gap-2 items-center text-center text-burgundy-500 hover:text-burgundy-500/90 transition-opacity duration-300 font-semibold">
          See All
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default MenuSpotlight