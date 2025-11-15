export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  message?: string;
  createdAt?: string;
}

export interface bookingForm {
  name: string;
  email: string;
  phone: string;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  message: string;
}
