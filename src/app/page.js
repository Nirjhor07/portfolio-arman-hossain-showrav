import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Spring-physics scroll depth progress bar */}
      <ScrollProgress />

      {/* Floating glassmorphic header */}
      <Navbar />

      {/* Core Page Content Sections */}
      <main className="flex-1 flex flex-col w-full relative z-10">
        {/* Intro hero showcase */}
        <Hero />

        {/* Origin bio & core stats */}
        <About />

        {/* Competency levels & meters */}
        <Skills />

        {/* Searchable/filterable certification gallery */}
        <Certifications />

        {/* Milestones timeline track */}
        <Experience />

        {/* Services & expertise */}
        <Services />

        {/* Client quotes slider */}
        <Testimonials />

        {/* Contact dispatch form */}
        <Contact />
      </main>

      {/* Global footplate copyrights & socials */}
      <Footer />
    </>
  );
}
