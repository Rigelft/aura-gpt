import { useState, useEffect, useCallback } from 'react'

interface TypeWriterProps {
    text: string
    speed?: number
    delay?: number
}

const TypeWriter: React.FC<TypeWriterProps> = ({
    text,
    speed = 50,
    delay = 0
}) => {
    const [displayedText, setDisplayedText] = useState('')

    // Fonction pour démarrer la saisie
    const startTyping = useCallback(() => {
        const interval = setInterval(() => {
            setDisplayedText(prev => {
                if (prev.length >= text.length) {
                    clearInterval(interval)
                    return prev
                }
                return text.slice(0, prev.length + 1)
            })
        }, speed)

        return () => clearInterval(interval)
    }, [text, speed])

    useEffect(() => {
        if (delay > 0) {
            const delayTimeout = setTimeout(() => {
                startTyping()
            }, delay)
            return () => clearTimeout(delayTimeout)
        } else {
            startTyping()
        }
    }, [delay, startTyping])

    return (
        <span className="inline-block">
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    )
}

export default TypeWriter
