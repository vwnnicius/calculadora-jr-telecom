"use client"

import { useEffect, useRef } from "react"

export function FiberOpticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
      pulsePhase: number
    }> = []
    const nodeCount = 10

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: 2 + Math.random() * 1.5,
        color: Math.random() > 0.7 ? "#ff781e" : "#0064ff",
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    const dataPackets: Array<{
      x: number
      y: number
      targetX: number
      targetY: number
      progress: number
      speed: number
      color: string
      size: number
    }> = []

    const createDataPacket = () => {
      if (nodes.length < 2) return

      const startNode = nodes[Math.floor(Math.random() * nodes.length)]
      const endNode = nodes[Math.floor(Math.random() * nodes.length)]

      if (startNode === endNode) return

      dataPackets.push({
        x: startNode.x,
        y: startNode.y,
        targetX: endNode.x,
        targetY: endNode.y,
        progress: 0,
        speed: 0.004 + Math.random() * 0.006,
        color: Math.random() > 0.6 ? "#ff781e" : "#0064ff",
        size: 1.5 + Math.random() * 1.5,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.25)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 300) {
            const opacity = (1 - distance / 300) * 0.08
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
            gradient.addColorStop(0, `rgba(0, 100, 255, ${opacity})`)
            gradient.addColorStop(1, `rgba(255, 120, 30, ${opacity})`)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        node.pulsePhase += 0.02

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        const pulseSize = node.radius + Math.sin(node.pulsePhase) * 0.8

        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseSize * 4)
        gradient.addColorStop(0, node.color === "#0064ff" ? "rgba(0, 100, 255, 0.15)" : "rgba(255, 120, 30, 0.15)")
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseSize * 4, 0, Math.PI * 2)
        ctx.fill()

        // Core node
        ctx.fillStyle = node.color
        ctx.shadowBlur = 8
        ctx.shadowColor = node.color
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Inner highlight
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
        ctx.beginPath()
        ctx.arc(node.x - pulseSize * 0.3, node.y - pulseSize * 0.3, pulseSize * 0.3, 0, Math.PI * 2)
        ctx.fill()
      })

      for (let i = dataPackets.length - 1; i >= 0; i--) {
        const packet = dataPackets[i]
        packet.progress += packet.speed

        if (packet.progress >= 1) {
          dataPackets.splice(i, 1)
          continue
        }

        packet.x = packet.x + (packet.targetX - packet.x) * packet.speed * 15
        packet.y = packet.y + (packet.targetY - packet.y) * packet.speed * 15

        const gradient = ctx.createRadialGradient(packet.x, packet.y, 0, packet.x, packet.y, packet.size * 5)
        gradient.addColorStop(0, packet.color === "#0064ff" ? "rgba(100, 180, 255, 0.4)" : "rgba(255, 150, 80, 0.4)")
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(packet.x, packet.y, packet.size * 5, 0, Math.PI * 2)
        ctx.fill()

        // Core packet
        ctx.fillStyle = packet.color
        ctx.shadowBlur = 12
        ctx.shadowColor = packet.color
        ctx.beginPath()
        ctx.arc(packet.x, packet.y, packet.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Bright center
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.beginPath()
        ctx.arc(packet.x, packet.y, packet.size * 0.4, 0, Math.PI * 2)
        ctx.fill()
      }

      if (Math.random() < 0.03 && dataPackets.length < 12) {
        createDataPacket()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.35 }} />
}
