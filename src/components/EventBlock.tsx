type Event = {
  eventType: string,
  description: string,
  image: string
};

const EventBlock = ({ eventType, description, image }: Event) => {
  return (
    <article className="relative flex-1 rounded-xl overflow-hidden image-overlay hover:[&>img]:scale-105">
      <img src={image} alt={eventType} className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-transform duration-300" />
      <div className="bg-[#00000080] flex flex-col justify-end p-8 h-80 text-white relative z-1">
        <div className="text-3xl font-bold mb-2">{eventType}</div>
        <p className="">{description}</p>
      </div>
    </article>
  )
}

export default EventBlock