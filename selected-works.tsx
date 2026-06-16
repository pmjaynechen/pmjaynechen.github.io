"use client"

import { ArrowRight, Sparkles, Wallet, Layout } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { useState } from "react"

type ProjectCategory = "AI" | "财务" | "其他"

interface Project {
  title: string
  description: string
  tags: string[]
  category: ProjectCategory
  metrics?: string
  role?: string
  slug: string
}

const PROJECTS: Project[] = [
  {
    title: "智能合同管理平台",
    description: "基于GPT/大模型能力，主导规划「智能发起—智能预审—履约管理」全链路AI产品方案并撰写完整PRD，推动合同全流程自动化与智能化建设。",
    tags: ["AI Agent", "RAG", "Multi-Agent", "GPT", "合同风控"],
    category: "AI",
    metrics: "退回率 78%→15%，审批周期 11天→3天，自动化处理率 70%，风险识别率 98%",
    role: "AI产品经理，项目负责人",
    slug: "ai-contract-platform",
  },
  {
    title: "能吃嘛",
    description: "单人全栈操盘「能吃嘛」AI 饮食助手项目，全程使用 Vibe Coding 完成 0-1 MVP 落地。核心设计RAG 检索增强知识库，沉淀食材成分、肾病分期、临床指南等专业数据。",
    tags: ["Vibe Coding", "微信小程序", "LLM", "uni-app"],
    category: "AI",
    slug: "ai-wechat-miniapp",
  },
  {
    title: "营销费用业务一体化",
    description: "平台店铺/营销费用充值消耗全流程管理系统，打通OA、FFC、NC三大系统，构建账户统一管控 → 充值申请与付款 → 消耗清单自动获取与汇总 → 费用统一入账 → 发票报销与消耗单关联 → 品牌应收追溯的全链路自动化闭环。",
    tags: ["费控", "对账", "OA集成", "NC对接"],
    category: "财务",
    metrics: "效率提升 70%，数据合规率 100%",
    slug: "recharge-consumption",
  },
  {
    title: "代销仓结算系统",
    description: "多渠道代销仓结算（天猫、京东、唯品会、屈臣氏），解决亿级负库存至审计可接受水平。",
    tags: ["结算", "代销", "库存管理"],
    category: "财务",
    metrics: "2023 年项目金奖，亿级负库存清零",
    slug: "multi-channel-settlement",
  },
  {
    title: "差旅费控系统",
    description: "服务集团1500+员工，对接携程、滴滴，实现差旅申请→预订→报销全流程线上化。",
    tags: ["费控", "携程API", "滴滴API"],
    category: "财务",
    metrics: "服务 1500+ 员工",
    slug: "travel-expense-control",
  },
  {
    title: "ERP-U9财务系统上线",
    description: "主导用友ERP-U9从零上线，替代不适用的金蝶系统，月结时间从5天优化至1天。",
    tags: ["ERP实施", "用友NC", "财务模块"],
    category: "财务",
    metrics: "月结效率 5天→1天",
    slug: "erp-u9-implementation",
  },
  {
    title: "泛微OA财务流程平台",
    description: "面向1500+用户，统筹财务审批流程搭建、内控授权配置与全链路流程落地。",
    tags: ["泛微OA", "流程配置", "内控授权"],
    category: "其他",
    metrics: "覆盖 1500+ 用户",
    slug: "oa-finance-workflow",
  },
  {
    title: "银企直联",
    description: "银企直联三方对接与测试，实现支付自动化。",
    tags: ["银企直联", "支付"],
    category: "其他",
    slug: "yinhang-zhilian",
  },
]

const FILTER_OPTIONS = [
  { key: "全部", label: "全部" },
  { key: "AI", label: "AI 项目" },
  { key: "财务", label: "财务项目" },
  { key: "其他", label: "其他" },
] as const

const ICON_MAP = {
  AI: Sparkles,
  财务: Wallet,
  其他: Layout,
}

export function SelectedWorks() {
  const [activeFilter, setActiveFilter] = useState<string>("全部")

  const filteredProjects =
    activeFilter === "全部"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <section id="works" className="py-20 md:py-10 md:pt-32 pb-4">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            项目作品集
          </SectionTitle>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveFilter(opt.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
                activeFilter === opt.key
                  ? "bg-amber text-white border-amber"
                  : "bg-transparent text-muted-foreground border-border hover:border-amber/40 hover:text-amber"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => {
            const IconComp = ICON_MAP[project.category]
            const index = String(i + 1).padStart(2, '0')
            return (
              <div
                key={project.title}
                className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-amber/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Card Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber/10 to-copper/10 border border-amber/20 flex items-center justify-center flex-shrink-0">
                    <IconComp size={24} className="text-amber" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-muted-foreground">{index}</span>
                    <a
                      href={`/projects/${project.slug}`}
                      className="text-lg font-semibold group-hover:text-amber transition-colors truncate block cursor-pointer"
                    >
                      {project.title}
                    </a>
                    {project.role && (
                      <p className="text-xs text-copper mt-1">{project.role}</p>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full border border-amber/20 bg-amber/5 text-amber"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.metrics && (
                  <p className="text-xs text-amber mb-3">{project.metrics}</p>
                )}

                <a
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-amber hover:text-copper transition-colors w-fit mt-auto cursor-pointer"
                >
                  查看详情
                  <ArrowRight size={14} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}