"use client"

const companies = [
  { name: "鲲驰集团", fullName: "上海路捷鲲驰集团", scale: "1500+人", industry: "电商新零售" },
  { name: "丝味国贸", fullName: "丝味（上海）国际贸易", scale: "20+人", industry: "出口贸易" },
  { name: "希尔股份", fullName: "上海希尔企业管理咨询", scale: "100+人", industry: "电力咨询" },
]

export function ClientLogos() {
  return (
    <section className="py-16 border-border overflow-hidden md:py-10 border-t-[0]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-8">
        <p className="text-sm text-muted-foreground text-center">服务过的企业</p>
      </div>

      {/* 滚动展示 - 全宽度 */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
          {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
            <div key={`${company.name}-${index}`} className="flex items-center justify-center px-12 min-w-max">
              <div className="text-center">
                <span className="text-2xl md:text-3xl font-semibold text-amber/50 whitespace-nowrap">
                  {company.name}
                </span>
                <div className="text-xs text-muted-foreground mt-1">
                  {company.scale} · {company.industry}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}