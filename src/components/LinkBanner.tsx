import { Link } from "react-router";
import { BsArrowRight  } from "react-icons/bs";

type Props = {
  heading: string,
  description: string,
  backgroundImage: string,
  url: string
}

const LinkBanner = ({ heading, description, backgroundImage, url }: Props) => {
  return (
    <section 
      id="contact" 
      className={`h-[500px] bg-cover bg-right relative`} 
      style={{ backgroundImage: `url(${backgroundImage})`}}
    >
      <div className="w-full h-full bg-black opacity-50 absolute z-1"></div>
      <article className="max-w-2xl lg:max-w-7xl h-full flex flex-col justify-center gap-7 mx-auto px-6 relative z-2">
        <h2 className="text-3xl lg:text-4xl text-white font-semibold">{heading}</h2>
        <p className="text-lg lg:text-xl max-w-3xl text-white font-lg">{description}</p>
        <Link className="text-md flex items-center gap-3 hover:gap-4 w-fit bg-tacha-500 hover:bg-tacha-600 px-5 py-3.5 text-wood-700 rounded-lg transition-all duration-200" to="/order">
          Place an Order
          <BsArrowRight className="w-5 h-5" />
        </Link>
      </article>
    </section>
  )
}

export default LinkBanner