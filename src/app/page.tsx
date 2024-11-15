import Approach from "@/components/Approach";

import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Image from "next/image";


export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <Navbar />
        <Hero />
        <Grid />
        <TechStack />
        <Projects />
        {/* <Clients /> */}
        <Experience  />
        {/* <Approach /> */}
        
        <Footer />
      </div>
    </main>
  );
}
