"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowDown, Mail, Github } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const titleText = "AI × 财务 复合型产品经理"
  const words = titleText.split(" ")
  const [maskReveal, setMaskReveal] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkDesktop()
    window.addEventListener("resize", checkDesktop)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 500
      const revealPercentage = Math.min(100, (scrollPosition / maxScroll) * 100)
      const calculatedOpacity = Math.min(1, scrollPosition / maxScroll)
      setMaskReveal(revealPercentage)
      setOpacity(calculatedOpacity)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkDesktop)
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      {/* Orb 背景 */}
      <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none animate-orb-rotate -z-10 scale-125">
        <Image src="/images/orb.png" alt="" width={750} height={750} className="w-full h-full" priority />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Tag */}
          <p className="text-muted-foreground mb-6 text-lg font-normal">I'm Jayne, AI × Finance Product Manager</p>

          {/* Main Title with animated words */}
          <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-semibold tracking-tight leading-[1] text-balance">
            {words.map((word, index) => (
              <span
                key={index}
                className={`hero-word my-0 py-2 font-mono font-normal text-5xl md:text-7xl ${word === "AI" || word === "财务" ? "ai-gradient-word" : ""}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  marginRight: index < words.length - 1 ? "0.25em" : "0",
                  ...(word === "AI" || word === "财务"
                    ? {
                        background: "linear-gradient(135deg, #e2a54e 0%, #c9825e 33%, #8b5cf6 66%, #00d4ff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter: "drop-shadow(0 0 20px rgba(226, 165, 78, 0.3))",
                      }
                    : {}),
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-xl leading-relaxed text-left text-lg text-zinc-500">
            财务管理专业出身，11年工作经验
            <br />
            主导 AI 大模型产品从 0 到 1 落地
            <br />
            深耕财务/合同风控具备 Multi-Agent + RAG + Vibe Coding 能力
          </p>

          {/* 核心亮点 */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="px-4 py-3 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
              <div className="text-lg font-semibold text-amber">70%↓</div>
              <div className="text-xs text-muted-foreground">审批周期缩短</div>
            </div>
            <div className="px-4 py-3 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
              <div className="text-lg font-semibold text-amber">98%</div>
              <div className="text-xs text-muted-foreground">风险识别率</div>
            </div>
            <div className="px-4 py-3 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
              <div className="text-lg font-semibold text-amber">2023</div>
              <div className="text-xs text-muted-foreground">年度金奖</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-row items-start gap-4 mt-10">
            <Link
              href="#works"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white rounded-full transition-all relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #e2a54e 0%, #c9825e 100%)",
                boxShadow: "0 4px 20px rgba(226, 165, 78, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(226, 165, 78, 0.5), 0 0 40px rgba(201, 130, 94, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(226, 165, 78, 0.3)"
              }}
            >
              查看项目
            </Link>
            <Link
              href="#experience"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium transition-colors"
              style={{ color: "#e2a54e" }}
            >
              工作经历
              <ArrowDown className="w-4 h-4" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="mailto:pmjayne@163.com"
              className="text-muted-foreground hover:text-amber transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/pmjaynechen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-amber transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}