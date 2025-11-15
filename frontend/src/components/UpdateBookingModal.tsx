import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { Booking, bookingForm } from "@/types/BookingType";
import { validateField } from "@/validator/FormValidation";
import { Loader2 } from "lucide-react";

type Props = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  booking: Booking | null;
};

export default function BookingFormModal({ booking, isOpen, setOpen }: Props) {
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
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    if (!booking) return;

    setFormData({
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      checkInDate: booking.checkIn ? booking.checkIn.split("T")[0] : "",
      checkInTime: booking.checkIn
        ? booking.checkIn.split("T")[1].slice(0, 5)
        : "",
      checkOutDate: booking.checkOut ? booking.checkOut.split("T")[0] : "",
      checkOutTime: booking.checkOut
        ? booking.checkOut.split("T")[1].slice(0, 5)
        : "",
      message: booking.message || "",
    });
  }, [booking]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    const msg = validateField(id, value, { ...formData, [id]: value });
    setErrors((prev) => ({ ...prev, [id]: msg }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, (formData as any)[key], formData);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      console.log("FORM SUBMITTED →", formData);
      alert("Modal form submitted successfully!");
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Update Booking Details</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="sample@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
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
                <p className="text-red-500 text-sm">{errors.checkOutDate}</p>
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
                <p className="text-red-500 text-sm">{errors.checkOutTime}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={submitting}
              className="flex items-center gap-2"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
