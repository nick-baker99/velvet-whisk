import HeroBanner from "../components/HeroBanner";
import cakeHeroImg from "../assets/images/birthday-cake-banner.jpg";
import { useState } from "react";
import locations from "../assets/data/locations.json";

const inputClass = "text-sm bg-lightpink-100 border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2";
const labelClass = "font-semibold text-wood-700 flex flex-col gap-2 mb-6";

const Order = () => {
  const [contact, setContact] = useState({
    firstName: '', lastName: '', email: '', company: '', phoneNumber: '',
  });

  const [event, setEvent] = useState({
    type: '', details: '', specialRequests: '', date: '',
  });

  const [delivery, setDelivery] = useState({
    type: 'delivery', collectionLocation: '',
    street: '', city: '', region: '', postcode: '',
  });

  const updateContact = (field: keyof typeof contact) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) =>
      setContact(prev => ({ ...prev, [field]: target.value }));

  const updateEvent = (field: keyof typeof event) =>
    ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setEvent(prev => ({ ...prev, [field]: target.value }));

  const updateDelivery = (field: keyof typeof delivery) =>
    ({ target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setDelivery(prev => ({ ...prev, [field]: target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <HeroBanner
        title="Place an Order"
        subTitle="We belive specials days deserves special treats"
        bgImage={cakeHeroImg}
      />
      <section className="py-10 md:py-18 px-6 bg-seashell-100">
        <form className="max-w-3xl mx-auto" onSubmit={handleSubmit}>

          <fieldset>
            <h2 className="text-xl text-wood-700 border-b border-gray-300 pb-2 mb-4">Your Info</h2>
            <div className="flex gap-4">
              <label className={`flex-1 ${labelClass}`}>
                First Name
                <input type="text" value={contact.firstName} onChange={updateContact('firstName')} placeholder="First name" className={inputClass} />
              </label>
              <label className={`flex-1 ${labelClass}`}>
                Last Name
                <input type="text" value={contact.lastName} onChange={updateContact('lastName')} placeholder="Last name" className={inputClass} />
              </label>
            </div>
            <label className={labelClass}>
              Email Address
              <input type="email" value={contact.email} onChange={updateContact('email')} placeholder="Email" className={inputClass} required />
            </label>
            <label className={labelClass}>
              Telephone Number
              <input type="text" value={contact.phoneNumber} onChange={updateContact('phoneNumber')} placeholder="Phone number" className={inputClass} required />
            </label>
            <label className={labelClass}>
              <span>Company Name <span className="text-sm opacity-80">(optional)</span></span>
              <input type="text" value={contact.company} onChange={updateContact('company')} placeholder="Company name" className={inputClass} />
            </label>
          </fieldset>

          <fieldset>
            <h2 className="text-xl text-wood-700 border-b border-gray-300 pb-2 mb-4">Event Details</h2>
            <label className={labelClass}>
              Type of Event
              <select value={event.type} onChange={updateEvent('type')} className="text-sm bg-white border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2">
                <option value="">No Event</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday Party</option>
                <option value="valentines">Valentines Day</option>
                <option value="other">Other</option>
              </select>
            </label>
            {event.type === 'other' && (
              <label className={labelClass}>
                Please Specify
                <input type="text" value={event.details} onChange={updateEvent('details')} placeholder="Event type" className={inputClass} required />
              </label>
            )}
            <label className={labelClass}>
              <span>Event Date <span className="text-sm opacity-80">*orders must be placed at least two weeks before an event</span></span>
              <input type="date" value={event.date} onChange={updateEvent('date')} className={inputClass} min={new Date().toJSON().slice(0, 10)} required />
            </label>
            <label className={labelClass}>
              Special Requests
              <textarea value={event.specialRequests} onChange={updateEvent('specialRequests')} placeholder="Please write any special requests here..." className={`min-h-20 max-h-100 ${inputClass}`} spellCheck={false} />
            </label>
          </fieldset>

          <fieldset>
            <h2 className="text-xl text-wood-700 border-b border-gray-300 pb-2 mb-4">Delivery Options</h2>
            <div className="flex gap-3 mb-4">
              {(['delivery', 'collection'] as const).map(type => (
                <button
                  key={type}
                  type="button"
                  className={`${delivery.type === type ? 'text-white bg-burgundy-500' : 'text-burgundy-500'} font-semibold px-4 py-2 border border-burgundy-500 capitalize`}
                  onClick={() => delivery.type !== type && setDelivery(prev => ({ ...prev, type }))}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
            {delivery.type === 'collection' ? (
              <label className={labelClass}>
                Select Store
                <select onChange={updateDelivery('collectionLocation')} className="text-sm bg-white border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2" required>
                  <option value="">Select Store</option>
                  {locations.map(location => <option key={location.slug} value={location.slug}>{`${location.name} (${location.area})`}</option>)}
                </select>
              </label>
            ) : (
              <>
                <label className={labelClass}>
                  Street
                  <input type="text" value={delivery.street} onChange={updateDelivery('street')} placeholder="Street" className={inputClass} required />
                </label>
                <div className="flex gap-4">
                  <label className={`flex-1 ${labelClass}`}>
                    City
                    <input type="text" value={delivery.city} onChange={updateDelivery('city')} placeholder="City" className={inputClass} required />
                  </label>
                  <label className={`flex-1 ${labelClass}`}>
                    Region
                    <input type="text" value={delivery.region} onChange={updateDelivery('region')} placeholder="Region" className={inputClass} required />
                  </label>
                </div>
                <label className={labelClass}>
                  Postcode
                  <input type="text" value={delivery.postcode} onChange={updateDelivery('postcode')} placeholder="Postcode" className={inputClass} required />
                </label>
              </>
            )}
          </fieldset>

          <button type="submit" className="text-md flex items-center gap-3 hover:gap-4 w-fit bg-burgundy-500 hover:bg-burgundy-600 px-5 py-3.5 text-white rounded-lg transition-all duration-200">Submit Order</button>
        </form>
      </section>
    </>
  );
};

export default Order;
