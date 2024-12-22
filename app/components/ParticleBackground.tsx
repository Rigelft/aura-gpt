'use client'

import { useEffect, useRef } from 'react'

class Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    color: string
    canvas: HTMLCanvasElement

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 
        this.speedX = Math.random() * 0.3 - 0.15 
        this.speedY = Math.random() * 0.3 - 0.15
        this.color = 'rgba(0, 255, 255, 0.6)' 
    }

    update(): void {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > this.canvas.width) this.x = 0
        if (this.x < 0) this.x = this.canvas.width
        if (this.y > this.canvas.height) this.y = 0
        if (this.y < 0) this.y = this.canvas.height
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
}

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null) 
    const particlesRef = useRef<Particle[]>([]) 
    const animationFrameRef = useRef<number | null>(null) 

    useEffect(() => {
        if (!canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const initParticles = () => {
            particlesRef.current = []
            for (let i = 0; i < 100; i++) { 
                particlesRef.current.push(new Particle(canvas))
            }
        }

        const animate = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particlesRef.current.forEach(particle => {
                particle.update()
                particle.draw(ctx)
            })

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        handleResize()
        initParticles()
        animate()

        window.addEventListener('resize', handleResize)

        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current)
            }
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
            style={{ opacity: 0.7 }} 
        />
    )
}

export default ParticleBackground
