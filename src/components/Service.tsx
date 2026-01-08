import React from 'react';
import { IconType } from "react-icons";

type Props = {
  Icon: IconType,
  title: String,
  description: String
}

const Service = ({ Icon, title, description }: Props) => {
  return (
    <article className="flex-1 bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-8 rounded-2xl border border-[#F4D7D9] space-y-4">
      <div className="flex justify-center items-center p-4.5 text-center text-burgundy-500 bg-lightpink-200 w-16 h-16 rounded-full mb-6">
        <Icon className="w-full h-full" />
      </div>
      <h3 className="text-xl text-wood-700 font-bold mb-3">{title}</h3>
      <p className="text-md text-wood-700 opacity-90">{description}</p>
    </article>
  )
}

export default Service