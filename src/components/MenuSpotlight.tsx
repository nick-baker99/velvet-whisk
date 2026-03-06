import React from 'react'
import MenuItem from './MenuItem';
import { BsArrowRight  } from "react-icons/bs";
import menuData from "../assets/data/menu.json";
import { Link } from 'react-router';

type MenuItem = {
  name: string,
  description: string,
  quantity: string,
  image: string,
  slug: string,
  category: string,
  price?: number
};

const MenuSpotlight = () => {
  // menu items to include in spotlight
  const chosenItems = ['artisan-cupcakes', 'french-macarons', 'signature-cakes', 'gourmet-cookies'];
  
  // filter chosen items from the JSON data
  const menuItems: Array<MenuItem> = menuData.filter(item => chosenItems.includes(item.slug));

  return (
    <section className="py-20 px-6 bg-linear-to-t from-seashell-100 to-lightpink-100">
      <div className="max-w-2xl lg:max-w-7xl mx-auto">
        <article className="max-w-3xl mx-auto text-center space-y-6 mb-6">
          <h2 className="text-3xl text-wood-700 font-bold">Sweat Treats</h2>
          <p className="text-base md:text-lg text-wood-700 opacity-90">Discover our carefully curated selection of handcrafted delights, each made with the finest ingredients and a touch of magic.</p>
        </article>
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {menuItems.map(item => <MenuItem key={item.slug} title={item.name} description={item.description} imageFile={item.image} slug={item.slug} />)}
        </div>
        <Link to="/menu" className="w-fit text-xl flex mx-auto gap-2 items-center text-center text-burgundy-500 hover:text-burgundy-500/90 transition-opacity duration-300 font-semibold">
          See Full Menu
          <BsArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}

export default MenuSpotlight