import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Source from "@/components/Source";
import AiPowered from "@/components/Aipowered";
import Enterprise from "@/components/Enterprise";
import India from "@/components/India";
import Experts from "@/components/Experts";
import Trusted from "@/components/Trusted";
import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";


export default function Home() {
  return (
      <main
      className="relative bg-[#FFFFFF] flex justify-center items-center flex-col  mx-auto font-poppins"
    >
      <Navbar/>
      <Hero/>
      <Source/>
      <AiPowered/>
      <Enterprise/>
      <India/>
      <Experts/>
      <Trusted/>
      <Footer1/>
      <Footer2/>
      </main>
  );
}
