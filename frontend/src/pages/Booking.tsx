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
import { toast } from "sonner";
import Footer from "@/components/Footer";
import type { bookingForm } from "@/types/BookingType";
import { validateField } from "@/validator/FormValidation";
import { usePostBookingForm } from "@/hooks/usePostBookingForm";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<bookingForm>({
    name: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkInTime: "",
    checkOutDate: "",
    checkOutTime: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const { error, loading, submitBooking } = usePostBookingForm();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prev) => ({ ...prev, [id]: value }));
    const errorMsg = validateField(id, value, { ...formData, [id]: value });
    setErrors((prev) => ({ ...prev, [id]: errorMsg }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, (formData as any)[key], formData);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;
    try {
      const data = await submitBooking(formData);
      if (data.success) {
        toast.success("booking added successfully");
        navigate("/bookings");
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkInDate: "",
          checkInTime: "",
          checkOutDate: "",
          checkOutTime: "",
          message: "",
        });

        setErrors({});
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      console.log("errors", error);
    }
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
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
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
                  placeholder="sample@example.com"
                  value={formData.email}
                  onChange={handleChange}
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
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleChange}
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
                  />
                  {errors.checkOutTime && (
                    <p className="text-red-500 text-sm">
                      {errors.checkOutTime}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Special Requests (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Any special requests or dietary requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              {error && (
                <div className="p-3 text-red-600 bg-red-100 border border-red-300 rounded-md text-sm">
                  {error}
                </div>
              )}

              <Button
                disabled={loading}
                type="submit"
                className="w-full flex items-center justify-center gap-2"
                size="lg"
              >
                {loading && <Loader2 className="h-5 w-5 animate-spin" />}
                {loading ? "Submitting..." : "Submit Booking"}
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
