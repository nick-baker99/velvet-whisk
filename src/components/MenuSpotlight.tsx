import React from 'react'
import MenuItem from './MenuItem';
import cupcakesImage from '../assets/images/treats/cupcakes.jpg';
import macaronsImage from '../assets/images/treats/macaron.jpg';
import cakesImage from '../assets/images/treats/cake-selection.jpg';
import cookiesImage from '../assets/images/treats/pastries.jpg';
import { BsArrowRight  } from "react-icons/bs";

type MenuItem = {
  title: string,
  description: string,
  image: string,
  slug: string
};

const MenuSpotlight = () => {
  const menuItems: MenuItem[] = [
    {
      title: "Artisan Cupcakes",
      description: "Delicate, moist cupcakes with handcrafted frosting in a variety of flavors.",
      image: cupcakesImage,
      slug: "artisan-cupcakes",
    },
    {
      title: "French Macarons",
      description: "Light, airy almond meringue cookies with luscious ganache fillings.",
      image: macaronsImage,
      slug: "french-macarons",
    },
    {
      title: "Signature Cakes",
      description: "Stunning layered cakes perfect for any celebration or special occasion.",
      image: cakesImage,
      slug: "signature-cakes",
    },
    {
      title: "Gourmet Cookies",
      description: "Crispy on the outside, chewy on the inside, made with premium chocolate.",
      image: cookiesImage,
      slug: "gourmet-cookies",
    }
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-t from-seashell-100 to-lightpink-100">
      <div className="max-w-2xl lg:max-w-7xl mx-auto">
        <article className="max-w-3xl mx-auto text-center space-y-6 mb-6">
          <h2 className="text-3xl text-wood-700 font-bold">Our Sweat Treats</h2>
          <p className="text-md text-wood-700 opacity-90">Discover our carefully curated selection of handcrafted delights, each made with the finest ingredients and a touch of magic.</p>
        </article>
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {menuItems.map(item => <MenuItem key={item.slug} title={item.title} description={item.description} image={item.image} slug={item.slug} />)}
        </div>
        <a href="#treats" className="w-fit text-xl flex mx-auto gap-2 items-center text-center text-burgundy-500 hover:text-burgundy-500/90 transition-opacity duration-300 font-semibold">
          See All
          <BsArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

export default MenuSpotlight