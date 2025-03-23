import Link from "next/link"
import { Building } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col gap-6 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-12">
          <div className="flex flex-col gap-3 md:gap-2 lg:gap-4 md:w-1/3">
            <Link href="/" className="flex items-center gap-2">
              <Building className="h-6 w-6" />
              <span className="font-bold">Homewise Vision</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transform your blueprints into interactive 3D models with AR technology
            </p>
          </div>
          <div className="flex justify-end md:flex-1">
            <div className="mr-32 text-sm">
              <h3 className="font-medium">Product</h3>
              <nav className="mt-3 flex flex-col gap-3">
                <Link href="/features" className="hover:underline">
                  Features
                </Link>
                <Link href="/demo" className="hover:underline">
                  Demo
                </Link>
              </nav>
            </div>
            <div className="text-sm">
              <h3 className="font-medium">Company</h3>
              <nav className="mt-3 flex flex-col gap-3">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© 2025 Homewise Vision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

