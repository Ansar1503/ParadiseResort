import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Waves, Sparkles } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Accommodation",
    description: "Luxurious villas and bungalows with stunning ocean views, modern amenities, and unparalleled comfort.",
  },
  {
    icon: Waves,
    title: "Adventure Activities",
    description: "Thrilling water sports, diving excursions, kayaking, and guided nature tours for the adventurous spirit.",
  },
  {
    icon: Sparkles,
    title: "Wellness & Spa",
    description: "Rejuvenating spa treatments, yoga sessions, and wellness programs to restore your mind and body.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience world-class hospitality with our carefully curated resort services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
