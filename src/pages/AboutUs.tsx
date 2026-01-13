import HeroBanner from "../components/HeroBanner";
import heroImg from "../assets/images/bakery-shop.jpg";
import doughImage from "../assets/images/dough-kneading.jpg";
import Locations from "../components/Locations";

const AboutUs = () => {
  return (
    <>
      <HeroBanner 
        title="Our Story"
        subTitle="At Velvet Whisk, every sweet treat begins with a story — one of passion, patience, and a deep love for the art of baking."
        bgImage={heroImg}
      />
      <section className="py-10 md:py-18 px-6 bg-linear-to-b from-seashell-100 to-lightpink-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center lg:flex-row gap-6">
          <article className="flex flex-col justify-center space-y-5 sm:space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-wood-700">Where It All Began</h3>
            <p className="text-sm md:text-base text-wood-700 opacity-95">What started as a simple dream to create beautiful, handcrafted desserts has grown into a bakery and catering experience devoted to turning life's moments into something unforgettable. From intimate gatherings to grand celebrations, we believe every occasion deserves something extraordinary.
            <br />
            <br />
            Our philosophy is simple: quality over everything. We carefully select the finest ingredients, blend time-honoured techniques with modern creativity, and pour heart and soul into every whisk, fold, and finish. The result? Baked goods that don't just look exquisite, but taste unforgettable.</p>
          </article>
          <img src={doughImage} alt="dough kneading" className="w-full md:w-5/6 lg:w-1/2 rounded-2xl" />
        </div>
      </section>
      <Locations />
    </>
  )
}

export default AboutUs