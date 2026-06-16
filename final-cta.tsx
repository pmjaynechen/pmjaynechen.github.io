import Link from "next/link"
import { ArrowRight, Mail, Github } from "lucide-react"

export function FinalCTA() {
  return (
    <section id="contact" className="py-20 border-border md:py-20 border-t-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">联系我</p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            财务背景 + AI 产品落地
          </h2>

          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            11年财务+产品经验，主导AI大模型产品从0到1落地
            <br />
            深耕财务/合同风控领域，具备Multi-Agent + RAG + Vibe Coding能力
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="mailto:pmjayne@163.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-2xl relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #e2a54e 0%, #c9825e 100%)",
                boxShadow: "0 8px 32px rgba(226, 165, 78, 0.4)",
              }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                联系我
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <a
              href="https://github.com/pmjaynechen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full hover:bg-secondary transition-colors"
              style={{ borderColor: "#e2a54e", borderWidth: "1px", color: "#e2a54e" }}
            >
              GitHub
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex items-center justify-center gap-6 text-muted-foreground">
            <a href="mailto:pmjayne@163.com" className="hover:text-amber transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/pmjaynechen" target="_blank" rel="noopener noreferrer" className="hover:text-amber transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}