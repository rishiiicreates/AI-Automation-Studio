import Hero from "@/components/Hero";
import Focus from "@/components/Focus";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
import ParallaxGallery from "@/components/ParallaxGallery";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import BackgroundStory from "@/components/BackgroundStory";

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-x-hidden w-full max-w-[100vw]">
      <BackgroundStory />
      <Hero />
      <Focus />
      <Marquee />
      <Portfolio />
      <ParallaxGallery />
      <Services />
      <Process />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
