"use client"

import { Sparkles, Wallet, Code, Target } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const skillGroups = [
  {
    category: "AI 产品能力",
    icon: Sparkles,
    skills: [
      { name: "Multi-Agent 架构设计", desc: "信息提取+风控审查+合同审核+文本对比" },
      { name: "RAG 知识库构建", desc: "企业知识向量化 + 检索增强" },
      { name: "Prompt Engineering", desc: "提示词设计与调优" },
      { name: "LLM 应用开发", desc: "API对接 + 应用场景落地" },
    ],
  },
  {
    category: "财务产品能力",
    icon: Wallet,
    skills: [
      { name: "费控与结算系统", desc: "充值消耗、对账核销、预提管理" },
      { name: "合同风控管理", desc: "合同全生命周期管理" },
      { name: "ERP 实施", desc: "用友NC/U9、金蝶系统实施" },
      { name: "银企直联", desc: "支付对接与自动化" },
    ],
  },
  {
    category: "Vibe Coding",
    icon: Code,
    skills: [
      { name: "Vue / uni-app", desc: "微信小程序开发" },
      { name: "Next.js", desc: "Web 应用开发" },
      { name: "Python", desc: "数据处理与脚本" },
      { name: "SQL", desc: "数据查询与分析" },
    ],
  },
  {
    category: "产品工具",
    icon: Target,
    skills: [
      { name: "PRD 撰写", desc: "完整产品需求文档" },
      { name: "原型设计", desc: "墨刀 / Figma / Axure" },
      { name: "数据分析", desc: "SQL / BI / Excel" },
      { name: "API 设计", desc: "前后端接口设计" },
    ],
  },
]

const certifications = [
  "会计中级职称",
  "CPA审计通过",
  "CPA经济法通过",
  "BEC剑桥商务英语中级",
]

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 border-border border-t-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-12 md:mb-16">
          能力矩阵
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => {
            const IconComp = group.icon
            return (
              <div key={group.category} className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber/10 to-copper/10 border border-amber/20 flex items-center justify-center">
                    <IconComp size={20} className="text-amber" />
                  </div>
                  <h3 className="text-lg font-semibold">{group.category}</h3>
                </div>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-muted-foreground">{skill.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-center mb-6">证书资质</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span key={cert} className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}