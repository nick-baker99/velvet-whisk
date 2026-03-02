import HeroBanner from "../components/HeroBanner";
import heroImg from "../assets/images/bakery-selection.jpg";
import { useEffect, useState } from "react";
import menuData from "../assets/data/menu.json";
import MenuItem from "../components/MenuItem";

const categories: Array<{ slug: string, title: string }> = [
  { slug: "cakes", title: "Signature Cakes" },
  { slug: "cupcakes-macaron", title: "Cupcakes & Macarons" },
  { slug: "pastries", title: "Pastries" },
  { slug: "cookies-brownies", title: "Cookies & Brownies" },
  { slug: "seasonal", title: "Seasonal Specials" }
];

const Menu = () => {
  const [category, setCategory] = useState('');
  const [menu, setMenu] = useState(menuData);

  // filter menu items by category
  useEffect(() => {
    if (category) {
      setMenu(menuData.filter(item => item.category === category));
    }
  }, [category]);

  return (
    <>
      <HeroBanner 
        title="Our Menu"
        subTitle="Discover our carefully crafted selection of artisanal sweet treats, made fresh daily with premium ingredients and lots of love."
        bgImage={heroImg}
      />
      <section className="py-4 md:py-8 px-6 bg-seashell-100 border-b border-lightpink-200">
        <div className="max-w-7xl mx-auto flex justify-center items-center flex-wrap gap-4 my-4">
          <button 
            className={`${!category ? 'bg-burgundy-500 text-white' : 'bg-lightpink-200 hover:bg-burgundy-500 text-burgundy-500'} text-burgundy-500 hover:text-white text-sm font-semibold w-fit px-6 py-2 rounded-full transition-colors`} 
            onClick={() => setCategory('')}
          >
            All Treats
          </button>
          {categories.map(item => (
            <button 
              className={`${category === item.slug ? 'bg-burgundy-500 text-white' : 'bg-lightpink-200 hover:bg-burgundy-500 text-burgundy-500'} hover:text-white text-sm font-semibold w-fit px-6 py-2 rounded-full transition-colors`} 
              key={item.slug}
              onClick={() => setCategory(item.slug)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </section>
      <section className="py-6 md:py-12 px-8 bg-seashell-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map(item => (
            <MenuItem 
              key={item.slug}
              title={item.name}
              description={item.description}
              imageFile={item.image}
              slug={item.slug}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Menu