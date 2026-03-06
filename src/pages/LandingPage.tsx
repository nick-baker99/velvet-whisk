import WelcomeHero from '../components/WelcomeHero'
import LinkBanner from '../components/LinkBanner'
import MenuSpotlight from '../components/MenuSpotlight'
import Services from '../components/Services'
import bakeryBgImage from '../assets/images/bakery-8760348_1920.jpg';
import CustomerFeedback from '../components/CustomerFeedback'
import CateringEvents from '../components/CateringEvents';

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <>
      <WelcomeHero />
      <Services />
      <MenuSpotlight />
      <CateringEvents />
      <LinkBanner 
        heading="Place a Custom Order Today"
        description="Whether you're planning a special celebration or just craving something delicious, we're here to create the perfect sweet treats for you. Custom orders, special events, or simply stopping by - we'd love to serve you."
        backgroundImage={bakeryBgImage}
        url="/order"
      />
      <CustomerFeedback />
    </>
  )
}

export default LandingPage