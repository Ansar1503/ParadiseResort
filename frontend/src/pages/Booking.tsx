import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { toast } from "sonner";
import Footer from "@/components/Footer";
import type { bookingForm } from "@/types/BookingType";
import { validateBookingForm } from "@/validator/FormValidation";

const Booking = () => {
  const [formData, setFormData] = useState<bookingForm>({
    name: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkInTime: "",
    checkOutDate: "",
    checkOutTime: "",
    guests: 0,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateBookingForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      checkInDate: "",
      checkInTime: "",
      checkOutDate: "",
      checkOutTime: "",
      guests: 0,
      message: "",
    });

    setErrors({});
  };
  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container mx-auto px-4 py-24">
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl md:text-4xl">
              Book Your Stay
            </CardTitle>
            <CardDescription className="text-base">
              Fill in your details and we'll get back to you shortly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="checkInDate">Check-in Date *</Label>
                  <Input
                    id="checkInDate"
                    type="date"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    required
                  />
                  {errors.checkInDate && (
                    <p className="text-red-500 text-sm">{errors.checkInDate}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkInTime">Check-in Time *</Label>
                  <Input
                    id="checkInTime"
                    type="time"
                    value={formData.checkInTime}
                    onChange={handleChange}
                    required
                  />
                  {errors.checkInTime && (
                    <p className="text-red-500 text-sm">{errors.checkInTime}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkOutDate">Check-out Date *</Label>
                  <Input
                    id="checkOutDate"
                    type="date"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    required
                  />
                  {errors.checkOutDate && (
                    <p className="text-red-500 text-sm">
                      {errors.checkOutDate}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkOutTime">Check-out Time *</Label>
                  <Input
                    id="checkOutTime"
                    type="time"
                    value={formData.checkOutTime}
                    onChange={handleChange}
                    required
                  />
                  {errors.checkOutTime && (
                    <p className="text-red-500 text-sm">
                      {errors.checkOutTime}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests *</Label>
                <Select
                  value={formData.guests?.toString()}
                  onValueChange={(value) =>
                    setFormData({ ...formData, guests: Number(value) })
                  }
                  required
                >
                  <SelectTrigger id="guests">
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5 Guests</SelectItem>
                  </SelectContent>
                </Select>
                {errors.guests && (
                  <p className="text-red-500 text-sm">{errors.guests}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Special Requests (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Any special requests or dietary requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" size="lg">
                Submit Booking
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
