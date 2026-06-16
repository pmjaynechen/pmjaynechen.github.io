"use client"

import Image from "next/image"

const skills = [
  "Multi-Agent 架构",
  "RAG 知识库",
  "Prompt 工程",
  "LLM 应用",
  "OCR 文档智能",
  "费控系统",
  "结算系统",
  "ERP 实施",
  "银企直联",
]

const stats = [
  { value: "11", label: "年经验" },
  { value: "70%", label: "审批提速" },
  { value: "98%", label: "风险识别率" },
]

import { SectionTitle } from "@/components/ui/section-title"

export function About() {
  return (
    <section id="about" className="py-20 border-border border-t-0 md:py-10 md:pb-32 md:pt-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              财务背景 + AI 产品落地能力
            </SectionTitle>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              财务管理专业出身，5 年财务实操 + 5 年产品经理经验。从 0 到 1 主导企业级 AI 大模型产品落地，深耕财务/合同风控领域。
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              具备多智能体架构设计、RAG 知识库构建、Prompt Engineering 等核心 AI 产品能力。
              持有会计中级职称，CPA 审计/经济法通过。
            </p>
          </div>

          {/* Right Content */}
          <div>
            {/* Skills */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">核心能力</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium border border-border rounded-full hover:bg-secondary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-secondary rounded-2xl">
                  <div className="text-2xl md:text-3xl font-semibold text-amber">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}