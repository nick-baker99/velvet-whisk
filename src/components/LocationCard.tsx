import { LuMapPin } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsClock } from "react-icons/bs";

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
    <article className="flex-1 p-8 text-wood-700 bg-seashell-100 shadow-lg hover:shadow-xl transition-all duration-300 border rounded-2xl border-[#F4D7D9] hover:border-burgundy-500 hover:-translate-y-2">
      {/* location pin icon */}
      <div className="w-11 h-11 bg-burgundy-500 text-white flex justify-center items-center p-3 rounded-full mb-4">
        <FiMapPin className="w-full h-full" />
      </div>
      <h4 className="text-2xl font-semibold mb-6">{name}</h4>
      <p className="text-base opacity-90">{street},</p>
      <p className="text-base opacity-90 mb-5">{area}, {postcode}</p>
      <div className="flex gap-3 items-center mb-4">
        <BsTelephone className="w-4.5 h-4.5 text-burgundy-500" />
        <a href={`tel:${telephone.replace(/\s/g, '')}`} className="text-sm hover:text-burgundy-500 transition-color opacity-90">{telephone}</a>
      </div>
      <div className="flex gap-3 items-center mb-4">
        <FiMail className="w-4.5 h-4.5 text-burgundy-500" />
        <a href={`mailto:${email}`} target="_blank" className="text-sm hover:text-burgundy-500 transition-color opacity-90">{email}</a>
      </div>
      <div className="pt-4 border-t border-[#F4D7D9]">
        <div className="text-sm opacity-90 flex items-center gap-3 mb-3">
          <BsClock className="w-4 h-4 text-burgundy-500" />
          Hours: 
        </div>
        <ul className="ps-4 text-sm space-y-2">
          {hours.map(row => (
            <li className="opacity-90"><strong className="font-semibold">{row.range}:</strong> {row.hours}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default LocationCard