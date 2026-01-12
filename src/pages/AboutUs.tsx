import HeroBanner from "../components/HeroBanner";
import heroImg from "../assets/images/bakery-shop.jpg";

const AboutUs = () => {
  return (
    <HeroBanner 
      title="Our Story"
      subTitle="At Velvet Whisk, every sweet treat begins with a story — one of passion, patience, and a deep love for the art of baking."
      bgImage={heroImg}
    />
  )
}

export default AboutUs