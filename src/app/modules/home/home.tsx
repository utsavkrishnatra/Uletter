import React from 'react'
import Header from '@/app/shared/widgets/header/header'
import Banner from './elements/banner'
import Branding from './elements/branding'
import Benefits from './elements/benefits'
import FeatureHighlight from './elements/feature.highlight'
import Pricing from './features/pricing'
import Footer from '@/app/modules/home/elements/footer'
const Home = () => {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <Branding></Branding>
        <Benefits/>
        <FeatureHighlight/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default Home