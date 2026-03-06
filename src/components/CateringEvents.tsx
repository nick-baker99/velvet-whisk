import weddingImg from '../assets/images/wedding.jpg';
import birthdayImg from '../assets/images/birthday-party.jpg';
import corporateImg from '../assets/images/corporate-event.jpg';
import EventBlock from './EventBlock';

type Event = {
  eventType: string,
  description: string,
  image: string
};

const CateringEvents = () => {
  const events: Array<Event> = [
    { eventType: "Weddings", description: "Make your special day one to remember.", image: weddingImg  },
    { eventType: "Birthday Parties", description: "Personalised cakes made to perfection.", image: birthdayImg  },
    { eventType: "Corporate Events", description: "Impress clients with a wonderful selection of sweet treats", image: corporateImg  }
  ];

  return (
    <section className="py-10 md:py-18 px-6 bg-linear-to-b from-lightpink-100 to-seashell-100">
      <div className="max-w-2xl lg:max-w-7xl mx-auto text-center">
        <article className="max-width-3xl text-center space-y-6 mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-wood-700">Catering Events</h3>
          <p className="text-base md:text-lg max-w-5xl text-wood-700 opacity-95 mx-auto">Make every occasion unforgettable with our bespoke catering experiences. From elegant weddings and lively birthday parties to professional corporate gatherings, we bring a touch of magic and the finest ingredients to every table, delighting your guests with handcrafted creations that taste as incredible as they look.</p>
        </article>
        <div className="flex flex-col lg:flex-row flex-wrap gap-4 text-left">
          {events.map(event => 
            <EventBlock 
              key={event.eventType} 
              eventType={event.eventType} 
              description={event.description} 
              image={event.image} 
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default CateringEvents