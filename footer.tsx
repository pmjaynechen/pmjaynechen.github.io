"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Github, MapPin, Phone } from "lucide-react"

const socialLinks = [
  { href: "mailto:pmjayne@163.com", icon: Mail, label: "Email" },
  { href: "https://github.com/pmjaynechen", icon: Github, label: "GitHub" },
]

const footerLinks = [
  { href: "#works", label: "项目作品" },
  { href: "#about", label: "关于" },
  { href: "#experience", label: "工作经历" },
  { href: "#skills", label: "技能" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "联系" },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Jayne Chen
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-xs leading-relaxed">
              AI × 财务 复合型产品经理
              <br />
              财务管理专业出身，11年工作经验
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary transition-colors hover:bg-amber/20"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-amber" />
                </Link>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} />
              <span>上海</span>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold mb-4">导航</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Wechat */}
          <div>
            <h4 className="text-sm font-semibold mb-4">联系方式</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>邮箱: pmjayne@163.com</p>
              <p className="flex items-center gap-2">
                <Phone size={14} />
                <span>17621508759</span>
              </p>
            </div>
            <div className="mt-4">
              <p className="text-xs text-muted-foreground mb-2">公众号</p>
              <div className="w-40 h-40 rounded-lg overflow-hidden border border-border">
                <Image
                  src="/wechat-qr.jpg"
                  alt="公众号二维码"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Jayne Chen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}