import React from 'react'
import HeroSection from '@/components/hero-section'
import Contributors from '@/components/contributors'
import DisruptiveServices from '@/components/services'
import WhyChooseDisruptive from '@/components/why-choose-us'

import Projects from '@/components/projects'

export default function Home() {
  return (
    <section className='py-4'>
      <div className='container'>
        <HeroSection />
        <DisruptiveServices />
        <Projects />
        <WhyChooseDisruptive />
        <Contributors />
      </div>
    </section>
  )
}
