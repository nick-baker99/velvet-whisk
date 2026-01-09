import React from 'react'
import FeedbackBlock from './FeedbackBlock'


const CustomerFeedback = () => {
  return (
    <section className="bg-seashell-100 py-20 px-6">
      <div className="max-w-2xl lg:max-w-7xl mx-auto">
        <article className="max-w-3xl mx-auto text-center space-y-6 mb-6">
          <h2 className="text-3xl text-wood-700 font-bold">What Our Customers Say</h2>
          <p className="text-md text-wood-700 opacity-90">Don't just take our word for it - hear from our delighted customers who've experienced the Velvet Whisk difference.</p>
        </article>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <FeedbackBlock 
            name="James Chen"
            customerType="Regular Customer"
            comments="I stop by every weekend for their macarons. The flavors are creative and always perfectly executed. It's my little weekly luxury!"
            rating={5}
          />
          <FeedbackBlock 
            name="Sarah Mitchell"
            customerType="Wedding Client"
            comments="The wedding cake from Velvet Whisk was absolutely stunning! Not only did it look beautiful, but it tasted divine. Our guests are still talking about it!"
            rating={5}
          />
          <FeedbackBlock 
            name="Emily Rodriguez"
            customerType="Corporate Client"
            comments="We order cupcakes from Velvet Whisk for all our office celebrations. They're always fresh, delicious, and beautifully decorated. Highly recommend!"
            rating={5}
          />
        </div>
      </div>
    </section>
  )
}

export default CustomerFeedback