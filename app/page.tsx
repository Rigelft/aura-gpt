'use client'

import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import TypeWriter from './components/TypeWriter'

const Home: React.FC = () => {
  const introText = `Aura est une IA conversationnelle qui comprend et génère du langage humain de façon authentique et réaliste, en intégrant les émotions pour plus d'engagement. Elle peut réfléchir de manière autonome, synthétiser des infos, et simuler des conversations avec différentes personnalités.`

  return (
    <div className="container mx-auto px-4 py-8">
      <ParticleBackground />
      <article className="max-w-3xl mx-auto">
        <Navbar />
        <div className="prose max-w-none text-cyan-100/90 mt-8">
          <p className="text-lg leading-relaxed">
            <TypeWriter
              text={introText}
              speed={30}
              delay={500}
            />
          </p>
        </div>
        <Footer />
      </article>
    </div>
  )
}

export default Home

