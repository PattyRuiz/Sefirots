import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CatalogSection } from "@/components/catalog-section"
import { OilsSection } from "@/components/oils-section"
import { BeehaSection } from "@/components/beeha-section"
import { ArindelleSection } from "@/components/arindelle-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CatalogSection />
      <OilsSection />
      <BeehaSection />
      <ArindelleSection />
      <Footer />
    </main>
  )
}
