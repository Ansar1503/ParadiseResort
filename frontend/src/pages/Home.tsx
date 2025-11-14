import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Gallery from "@/components/Home/Gallery";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
