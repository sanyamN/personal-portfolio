import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <div className="gradient" />

      <Navbar />

      <main className="mx-auto mt-28 flex max-w-7xl gap-8 px-8">

        <Sidebar />

       <div className="flex-1">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </div>

      </main>

    </>
  );
}