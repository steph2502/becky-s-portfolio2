import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FocusAreas from "@/components/FocusAreas";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Quote from "@/components/Quote";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <Experience />
        <Leadership />
        <Quote />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
