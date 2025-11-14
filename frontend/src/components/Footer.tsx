import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+91 123345678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>paradise@resort.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>123 Paradise Island, Maldives</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Paradise Resort</h3>
            <p className="text-background/80 leading-relaxed">
              Experience luxury and tranquility at our tropical paradise. We
              offer world-class amenities and unforgettable experiences in one
              of the most beautiful locations on Earth.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
          <p>&copy; 2024 Paradise Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
