import React from 'react'
import Hero from '../components/Hero'
import MenuSpotlight from '../components/MenuSpotlight'
import Services from '../components/Services'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <>
      <Hero />
      <Services />
      <MenuSpotlight />
    </>
  )
}

export default LandingPage