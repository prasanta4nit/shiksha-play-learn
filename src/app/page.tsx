import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustHighlights from "@/components/TrustHighlights";
import About from "@/components/About";
import Programs from "@/components/Programs";
import WhyUs from "@/components/WhyUs";
import Activities from "@/components/Activities";
import Facilities from "@/components/Facilities";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import YouTubeSection from "@/components/YouTubeSection";
import Testimonials from "@/components/Testimonials";
import AdmissionCTA from "@/components/AdmissionCTA";
import AdmissionForm from "@/components/AdmissionForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustHighlights />
        <About />
        <Programs />
        <WhyUs />
        <Activities />
        <Facilities />
        <Events />
        <Gallery />
        <YouTubeSection />
        <Testimonials />
        <AdmissionCTA />
        <AdmissionForm />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
