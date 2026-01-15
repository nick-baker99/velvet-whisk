import heroImg from '../assets/images/chocolate-crossaint.jpg';

const WelcomeHero = () => {
  return (
    <section className="pt-16 pb-16 xl:pb-0 xl:pt-0 xl:section-min-height flex items-center bg-linear-to-b from-seashell-100 to-lightpink-100">
      <div className="h-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-12">
        <article className="w-full sm:w-5/6 lg:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-5xl text-wood-700 text-center lg:text-left font-bold">Handcrafted <span className="text-burgundy-500">Sweet Treats</span> Made with Love</h1>
          <p className="text-md md:text-lg text-center lg:text-left text-wood-700 opacity-90">Experience the art of artisanal baking with our exquisite selection of cakes, pastries, and sweet treats. Every creation is a masterpiece.</p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
            <a href="#menu" className="px-6 py-3 md:py-4 text-md text-white bg-burgundy-500 hover:bg-burgundy-600 rounded-full transition-colors duration-300">Browse Our Menu &gt;</a>
            <a href="#menu" className="px-6 py-3 md:py-4 text-md text-burgundy-500 hover:bg-burgundy-500 hover:text-white border-2 border-burgundy-500 rounded-full transition-colors duration-300">Place Custom Order</a>
          </div>
        </article>
        <img className="w-full sm:w-5/6 lg:w-1/2 rounded-2xl h-[400px] object-cover" src={heroImg} alt="chocolate crossaint" />
      </div>
    </section>
  )
}

export default WelcomeHero;