import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-resort.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
          Paradise Resort
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-lg">
          Your Gateway to Tropical Luxury and Unforgettable Experiences
        </p>
        <Button
          size="lg"
          onClick={() => navigate("/booking")}
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
        >
          Book Your Stay
        </Button>
      </div>
    </section>
  );
};

export default Hero;
