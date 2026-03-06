//import heroImg from '../assets/images/chocolate-crossaint.jpg';
import heroImg from '../assets/images/treats/mixed-fruit-tarts.jpg';
import heroImg2 from '../assets/images/chocolate-crossaint.jpg';
import heroImg3 from '../assets/images/treats/red-velvet-cake.jpg';
import { Link } from 'react-router';


const WelcomeHero = () => {
  return (
    <section className="xl:hero-height flex">
      <article className="px-6 sm:px-10 md:px-24 xl:px-28 py-18 xl:py-10 w-full lg:w-[55%] flex flex-col gap-6 justify-center bg-linear-to-t from-[#f794a4] to-[#fdd6bd]">
        <h1 className="text-4xl md:text-5xl xl:text-6xl text-wood-700 text-center lg:text-left font-bold">Handcrafted <span className="text-burgundy-500">Sweet Treats</span> Made with Love</h1>
        <p className="text-md md:text-xl text-center lg:text-left text-wood-700 opacity-90 mb-4">Experience the art of artisanal baking with our exquisite selection of cakes, pastries, and sweet treats. Every creation is a masterpiece.</p>
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
          <Link to="/menu" className="px-6 py-3 md:py-4 text-md text-white bg-burgundy-500 hover:bg-burgundy-600 rounded-full transition-colors duration-300">Browse Our Menu &gt;</Link>
          <Link to="/order" className="px-6 py-3 md:py-4 text-md text-burgundy-500 hover:bg-burgundy-600 hover:text-white border-2 border-burgundy-500 rounded-full transition-colors duration-300">Place Custom Order</Link>
        </div>
      </article>
      <div className="w-[45%] hidden lg:grid grid-cols-2 grid-rows-[50%] image-overlay">
        <div className="col-span-full">
          <img src={heroImg} alt="mixture of fruit tarts" className="object-cover w-full h-full" />
        </div>
        <div className="">
          <img src={heroImg2} alt="chocolate crossaint" className="object-cover w-full h-full" />
        </div>
        <div className="">
          <img src={heroImg3} alt="cupcakes" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  )
}


/*
const WelcomeHero = () => {
  return (
    <section className="pt-16 pb-16 xl:pb-0 xl:pt-0 xl:hero-height flex items-center bg-linear-to-t from-[#f794a4] to-[#fdd6bd]">
      <div className="h-full max-w-5/6 mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-12">
        <article className="w-full sm:w-5/6 lg:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-5xl text-wood-700 text-center lg:text-left font-bold">Handcrafted <span className="text-burgundy-500">Sweet Treats</span> Made with Love</h1>
          <p className="text-md md:text-lg text-center lg:text-left text-wood-700 opacity-90">Experience the art of artisanal baking with our exquisite selection of cakes, pastries, and sweet treats. Every creation is a masterpiece.</p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
            <a href="#menu" className="px-6 py-3 md:py-4 text-md text-white bg-burgundy-500 hover:bg-burgundy-600 rounded-full transition-colors duration-300">Browse Our Menu &gt;</a>
            <a href="#menu" className="px-6 py-3 md:py-4 text-md text-burgundy-500 hover:bg-burgundy-500 hover:text-white border-2 border-burgundy-500 rounded-full transition-colors duration-300">Place Custom Order</a>
          </div>
        </article>
        <img className="w-full sm:w-5/6 lg:w-1/2 rounded-2xl h-[400px] object-cover" src={heroImg2} alt="chocolate crossaint" />
      </div>
    </section>
  )
}
*/

export default WelcomeHero;