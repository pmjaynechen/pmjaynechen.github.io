"use client"

import { ExternalLink } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const POSTS = [
  {
    title: "AI+合同审查落地分享",
    date: "2025-07",
    description: "从需求分析到智能体架构设计，详解AI合同审查项目的完整落地过程",
    url: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk4ODYwNDAzMA==&action=getalbum&album_id=4089433500586229767",
    tags: ["AI", "合同审查", "RAG"],
    metrics: "累计阅读 4.5W+ · 累计分享 5000+",
  },
  {
    title: "AI+合同审查项目落地分享（中）",
    date: "2025-07",
    description: "深入产品设计细节，Multi-Agent架构与RAG知识库构建实战",
    url: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk4ODYwNDAzMA==&action=getalbum&album_id=4089433500586229767",
    tags: ["AI", "合同审查", "Multi-Agent"],
  },
  {
    title: "手搓skill分享：「万物」转Draw.io流程图",
    date: "2026-06",
    description: "手搓skill实操分享：如何将截图、代码块等万物快速转为Draw.io流程图",
    url: "https://mp.weixin.qq.com/s/UDefHuBvAQc2F_iEGCQZIA",
    tags: ["Skill", "Draw.io", "Vibe Coding"],
  },
]

export function Insights() {
  return (
    <section id="blog" className="py-20 md:py-32 border-border border-t-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Blog
          </SectionTitle>
        </div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-border bg-card hover:border-amber/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full border border-amber/20 bg-amber/5 text-amber"
                  >
                    {tag}
                  </span>
                ))}
                <ExternalLink size={12} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-amber transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {post.description}
              </p>
              <div className="flex items-center gap-4">
                <time className="text-xs text-muted-foreground">{post.date}</time>
                {post.metrics && (
                  <span className="text-xs text-amber">{post.metrics}</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}