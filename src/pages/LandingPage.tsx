import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <>
      <Hero />
      <Services />
    </>
  )
}

export default LandingPage