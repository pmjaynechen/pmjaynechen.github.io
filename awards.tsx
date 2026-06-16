"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { SectionTitle } from "@/components/ui/section-title"

const experiences = [
  {
    period: "2020.06 — 2025.01",
    company: "上海路捷鲲驰集团",
    scale: "1500+人",
    industry: "电商新零售",
    role: "AI 产品经理 / 财务产品经理",
    highlights: [
      "从 0 到 1 主导 AI 智能合同管理平台，多 Agent 架构设计",
      "负责充值消耗、差旅费控、代销仓结算等多系统产品设计",
      "代销仓结算项目获 2023 年公司金奖",
      "泛微 OA 财务流程全链路优化",
      "银企直联方案设计与落地",
    ],
  },
  {
    period: "2016.10 — 2019.04",
    company: "丝味（上海）国际贸易",
    scale: "20+人",
    industry: "出口贸易",
    role: "会计 / ERP 项目经理（兼）",
    highlights: [
      "6 个月主导 ERP-U9 全流程上线，替代金蝶，效率提升 50%",
      "独立出具三大报表，管理国内外应付账款",
    ],
  },
  {
    period: "2015.08 — 2016.08",
    company: "上海希尔企业管理咨询",
    scale: "100+人",
    industry: "电力咨询",
    role: "财务助理",
    highlights: [
      "财税申报与日常账务处理，零差错记录",
      "优化报销流程，效率提升 30%",
    ],
  },
]

export function Awards() {
  return (
    <section id="experience" className="py-20 md:py-32 border-border border-t-0 md:pt-0 md:pb-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-12 md:mb-16">
          工作经历
        </SectionTitle>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, index) => (
            <Link
              key={index}
              href="#"
              className="group flex items-center justify-between p-5 md:p-6 border border-border rounded-2xl hover:bg-secondary/50 transition-all hover:border-foreground/20"
            >
              <div className="flex items-center gap-6 flex-1">
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-1">{exp.period}</div>
                  <h3 className="font-semibold text-xl md:text-2xl">
                    {exp.company} <span className="text-muted-foreground font-normal text-sm">[{exp.industry}/{exp.scale}]</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{exp.role}</p>
                  <ul className="mt-3 space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-amber">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="text-sm text-muted-foreground font-medium">{exp.period.split('—')[0].trim()}</span>
              </div>
              <ArrowRight
                className="w-8 h-8 md:w-10 md:h-10 ml-6 text-muted-foreground transition-all group-hover:translate-x-1"
                strokeWidth={1}
                style={{ color: "#e2a54e" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}