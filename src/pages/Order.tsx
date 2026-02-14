import HeroBanner from "../components/HeroBanner";
import cakeHeroImg from "../assets/images/birthday-cake-banner.jpg";
import { useState } from "react";


const Order = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSubmit = () => {

  }

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
              <label className="font-semibold flex-1 text-wood-700 flex flex-col gap-2 mb-6">
                First Name
                <input 
                  type="text" 
                  value={firstName} 
                  onChange={({ target }) => setFirstName(target.value)} 
                  placeholder="First name" 
                  className="text-sm bg-lightpink-100 border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2"
                />
              </label>
              <label className="font-semibold flex-1 text-wood-700 flex flex-col gap-2 mb-6">
                Last Name
                <input 
                  type="text" 
                  value={lastName} 
                  onChange={({ target }) => setLastName(target.value)} 
                  placeholder="Last name" 
                  className="text-sm bg-lightpink-100 border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2"
                />
              </label>
            </div>
            <label className="font-semibold text-wood-700 flex flex-col gap-2 mb-6">
              Email Address
              <input 
                type="email" 
                value={email} 
                onChange={({ target }) => setEmail(target.value)} 
                placeholder="Email" 
                className="text-sm bg-lightpink-100 border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2"
                required
              />
            </label>
            <label className="font-semibold text-wood-700 flex flex-col gap-2 mb-6">
              <span>Company Name <span className="text-sm opacity-80">(optional)</span></span>
              <input 
                type="text" 
                value={company} 
                onChange={({ target }) => setCompany(target.value)} 
                placeholder="Company name" 
                className="text-sm bg-lightpink-100 border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2"
              />
            </label>
          </fieldset>
          <fieldset>
            <h2 className="text-xl text-wood-700 border-b border-gray-300 pb-2 mb-4">Event Details</h2>
            <label className="font-semibold text-wood-700 flex flex-col gap-2 mb-6">
              Type of Event
              <select 
                value={eventType} 
                onChange={({ target }) => setEventType(target.value)}
                className="text-sm bg-white border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2"
              >
                <option value="">No Event</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday Party</option>
                <option value="valentines">Valentines Day</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="font-semibold text-wood-700 flex flex-col gap-2 mb-6">
              <span>Delivery Date {eventType && <span className="text-sm opacity-80">*orders must be placed at least two weeks before an event</span>}</span>
              <input 
                type="date" 
                value={eventDate} 
                onChange={({ target }) => setEventDate(target.value)} 
                placeholder="Company name" 
                className="text-sm bg-lightpink-100 border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2"
                min={new Date().toJSON().slice(0, 10)}
              />
            </label>
            {eventType == 'other' && (
              <label className="font-semibold text-wood-700 flex flex-col gap-2 mb-6">
                Please Speicify
                <input 
                  type="text" 
                  value={eventDetails} 
                  onChange={({ target }) => setEventDetails(target.value)} 
                  placeholder="Event type" 
                  className="text-sm bg-lightpink-100 border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2"
                />
              </label>
            )}
            <label className="font-semibold text-wood-700 flex flex-col gap-2 mb-6">
              Special Requests
              <textarea 
                value={specialRequests} 
                onChange={({ target }) => setSpecialRequests(target.value)} 
                placeholder="Please write any special requests here..." 
                className="min-h-20 max-h-100 text-sm bg-lightpink-100 border border-[#F4D7D9] focus:outline-burgundy-500 rounded-md px-3.5 py-2"
              >
              </textarea>
            </label>
          </fieldset>
          <button type="submit" className="text-md flex items-center gap-3 hover:gap-4 w-fit bg-burgundy-500 hover:bg-tacha-600 px-5 py-3.5 text-white rounded-lg transition-all duration-200">Submit Order</button>
        </form>
      </section>
    </>
  )
}

export default Order