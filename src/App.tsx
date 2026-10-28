import Header from './components/Header'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import FamilyConnect from './components/FamilyConnect'
import Plans from './components/Plans'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <WhyUs />
        <FamilyConnect />
        <Plans />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
