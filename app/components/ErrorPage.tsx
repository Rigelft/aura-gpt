import React from 'react'
import Link from 'next/link'
import ParticleBackground from './ParticleBackground'

interface ErrorPageProps {
    statusCode: number
    title: string
    message: string
}

const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode, title, message }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <ParticleBackground />
            <main className="flex-grow flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-9xl font-bold text-cyan-400 mb-4">{statusCode}</h1>
                    <h2 className="text-4xl font-semibold text-cyan-200 mb-4">{title}</h2>
                    <p className="text-xl text-cyan-100 mb-8">{message}</p>
                    <Link
                        href="/"
                        className="px-6 py-3 bg-cyan-600 text-cyan-100 rounded-lg hover:bg-cyan-500 transition-colors"
                    >
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default ErrorPage

