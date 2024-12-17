import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Projects";
import SkillsAndAboutMe from "@/components/SkillsAndAboutMe";
import Footer from "@/components/Footer";
import Head from "next/head";



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
      <Head>
        <link rel=" " href="./image.png" />
        <title>Portifólio da Morse</title>
      </Head>
     
    </div>
   </>
  );
}
