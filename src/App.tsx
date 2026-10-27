import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Trust from './components/Trust'
import HowItWorks from './components/HowItWorks'
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
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
