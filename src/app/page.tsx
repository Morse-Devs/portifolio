import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Projects";
import SkillsAndAboutMe from "@/components/SkillsAndAboutMe";
import Footer from "@/components/Footer";



import Image from "next/image";

export default function Home() {
  return (
   <>
    <div>
      <Navbar />
      <HomePage />
      <Projects />
      <SkillsAndAboutMe />
      <Footer />
     
    </div>
   </>
  );
}
