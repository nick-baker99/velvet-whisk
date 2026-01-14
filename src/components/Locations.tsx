import locations from "../assets/data/locations.json";
import LocationCard from "./LocationCard";


const Locations = () => {
  return (
    <section className="py-10 md:py-18 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <article className="max-width-3xl text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-wood-700">Visit Us</h3>
          <p className="text-base md:text-lg text-wood-700 opacity-95">Find your nearest Velvet Whisk location and experience our treats in person.</p>
        </article>
        <div className="max-w-2xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {locations.map((location) => (
            <LocationCard 
              key={location.name}
              name={location.name}
              street={location.street}
              area={location.area}
              postcode={location.postcode}
              telephone={location.telephone}
              email={location.email}
              hours={location.hours}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Locations