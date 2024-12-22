'use client'

import ErrorPage from './components/ErrorPage'

export default function NotFound() {
    return (
        <ErrorPage
            statusCode={404}
            title="Page non trouvée"
            message="Désolé, la page que vous recherchez n'existe pas."
        />
    )
}

