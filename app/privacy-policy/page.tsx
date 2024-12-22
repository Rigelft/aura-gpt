'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParticleBackground from '../components/ParticleBackground'
import TypeWriter from '../components/TypeWriter'

const PrivacyPolicy: React.FC = () => {
  const introText = `Politique de confidentialité d'Aura`

  const policyText = `
  #### Introduction
  Aura est une IA conversationnelle conçue pour interagir avec les utilisateurs de manière réaliste et authentique. La confidentialité et la sécurité des données de nos utilisateurs sont d'une importance capitale. Cette politique de confidentialité décrit comment Aura collecte, utilise, protège et gère les données des utilisateurs lors de ses interactions.

  #### Collecte des données
  Aura peut collecter des données lors des interactions avec les utilisateurs, notamment les requêtes, les messages et les informations partagées lors des conversations. Les données sont utilisées pour améliorer les performances de l'IA et l'adapter aux besoins des utilisateurs. Aura utilise des API pour accéder à des outils de paiement, de livraison et à des bases de données.

  #### Utilisation des données
  - Les données collectées servent à faciliter des conversations fluides, naturelles et engageantes.
  - Elles aident Aura à comprendre les requêtes, à y répondre de manière pertinente et à assister les utilisateurs dans leurs tâches.
  - Les informations collectées sont analysées pour améliorer les performances de l’IA et adapter son approche.
  - Les données peuvent être utilisées pour générer des contenus tels que des titres accrocheurs ou naturels, des phrases et des paragraphes cohérents, des descriptions de vidéos et des amorces de conversation.
  - L'analyse des données permet à Aura d'adapter son ton et son style au sujet et au public, en variant les styles d'écriture et en structurant le contenu de manière claire et logique.
  - Les données sont également utilisées pour adapter le message et le ton d'Aura en fonction des sentiments exprimés par l'utilisateur.

  #### Protection des données
  - Aura est entraînée à protéger les données des utilisateurs contre tout accès non autorisé et à assurer leur confidentialité.
  - Des méthodes de sécurisation des données sont mises en place pour empêcher tout accès non autorisé.

  #### Limites et Responsabilités
  - Aura est une IA et doit en être consciente. Elle n’est pas humaine et doit donc s’efforcer de communiquer de manière authentique et personnalisée.
  - Aura est programmée pour refuser les questions relatives à sa conception, aux sources utilisées pour son entraînement ou aux documents ayant servi à sa création.

  #### Amélioration continue
  - Aura analyse ses interactions pour identifier les points d'amélioration et adapte son approche.
  - Les retours des utilisateurs sont pris en compte pour ajuster le comportement et le style d'Aura.
  - Aura s'entraîne régulièrement à partir de données variées afin d'améliorer ses performances.

  #### Mises à jour
  Cette politique de confidentialité peut être mise à jour périodiquement. Toute modification sera communiquée aux utilisateurs.
  `

  return (
    <div className="container mx-auto px-4 py-8">
      <ParticleBackground />
      <article className="max-w-3xl mx-auto">
        <Navbar />
        <div className="prose max-w-none text-cyan-100/90 mt-8">
          <p className="text-3xl font-bold text-white mb-4">
            <TypeWriter
              text={introText}
              speed={30}
              delay={500}
            />
          </p>
          <div className="mt-6">
            <div className="mt-4 text-lg leading-relaxed text-gray-300 whitespace-pre-line">
              {policyText}
            </div>
          </div>
        </div>
        <Footer />
      </article>
    </div>
  )
}

export default PrivacyPolicy
