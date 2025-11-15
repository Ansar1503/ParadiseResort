import type { bookingForm } from "@/types/BookingType";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;

export const validateField = (
  field: string,
  value: string,
  formData: bookingForm
) => {
  switch (field) {
    case "name":
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 3) return "Name must be at least 3 characters";
      return "";

    case "email":
      if (!value.trim()) return "Email is required";
      if (!emailRegex.test(value)) return "Enter a valid email";
      return "";

    case "phone":
      if (!value.trim()) return "Phone number is required";
      if (!phoneRegex.test(value)) return "Enter a valid phone number";
      return "";

    case "checkInDate": {
      const today = new Date().toISOString().split("T")[0];
      if (!value) return "Check-in date is required";
      if (value < today) return "Check-in cannot be before today";

      if (formData.checkOutDate && value > formData.checkOutDate)
        return "Check-in cannot be after check-out";

      return "";
    }

    case "checkOutDate": {
      if (!value) return "Check-out date is required";

      const today = new Date().toISOString().split("T")[0];
      if (value < today) return "Check-out cannot be before today";

      if (formData.checkInDate && value < formData.checkInDate)
        return "Check-out must be after check-in";

      return "";
    }

    case "checkInTime": {
      if (!value) return "Check-in time is required";

      if (formData.checkInDate) {
        const today = new Date().toISOString().split("T")[0];

        if (formData.checkInDate === today) {
          const now = new Date();
          const selected = new Date(formData.checkInDate + "T" + value);

          if (selected < now) return "Check-in time cannot be in the past";
        }
      }

      return "";
    }
    case "checkOutTime": {
      if (!value) return "Check-out time is required";

      if (formData.checkInDate && formData.checkOutDate) {
        const checkInDT = new Date(
          formData.checkInDate + "T" + formData.checkInTime
        );
        const checkOutDT = new Date(formData.checkOutDate + "T" + value);

        if (checkOutDT <= checkInDT)
          return "Check-out must be later than check-in time";
      }

      return "";
    }

    case "guests":
      if (!value || Number(value) <= 0) return "Please select number of guests";
      return "";

    case "message":
      return "";

    default:
      return "";
  }
};
