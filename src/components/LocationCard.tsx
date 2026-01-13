import { LuMapPin } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";

type OpeningHours = {
  range: string,
  hours: string
};

type Props = {
  name: string,
  street: string,
  area: string,
  postcode: string,
  telephone: string,
  email: string,
  hours: Array<OpeningHours>
}

const LocationCard = ({ name, street, area, postcode, telephone, email, hours }: Props) => {
  return (
    <article className="p-8 bg-seashell-100 shadow-lg hover:shadow-xl transition-all duration-300 border rounded-2xl border-[#F4D7D9]">
      {/* location pin icon */}
      <div className="w-11 h-11 bg-burgundy-500 text-white flex justify-center items-center p-3 rounded-full mb-4">
        <FiMapPin className="w-full h-full" />
      </div>
      <h4 className="text-2xl text-wood-700 font-semibold mb-6">{name}</h4>
      <p className="text-base text-wood-700 opacity-90">{street},</p>
      <p className="text-base text-wood-700 opacity-90">{area}, {postcode}</p>
    </article>
  )
}

export default LocationCard