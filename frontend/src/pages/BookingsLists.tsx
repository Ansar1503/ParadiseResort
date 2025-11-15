import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SearchComponent from "@/components/Search";
import { SelectComponent } from "@/components/SelectComponent";
import PaginationComponent from "@/components/Pagination";
import type { Booking, sortType } from "@/types/BookingType";
import { useFetchBookings } from "@/hooks/useFetchBookings";
import { BookingTableSkeleton } from "@/components/BookingsListSkeleton";
import { formatDateTime } from "@/lib/FormatDate";
import { Pencil, Trash2 } from "lucide-react";
import { useDeleteBookings } from "@/hooks/useDeleteBooking";
import BookingFormModal from "@/components/UpdateBookingModal";

const BookingsLists = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const {
    bookings,
    loading,
    page,
    setPage,
    search,
    setSearch,
    sort,
    setSort,
    refetch,
    totalPages,
    totalItems,
  } = useFetchBookings(1, 10);
  const { deleteBookingById, loading: deleting } = useDeleteBookings();

  const handleDeleteClick = async (id: string) => {
    if (!id) return;
    try {
      await deleteBookingById(id);
      refetch();
    } catch (error) {
      console.log("delete error", error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-secondary/20">
        <div className="container mx-auto px-4 py-24">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl">Booking Management</CardTitle>
              <CardDescription className="text-base">
                View and manage all resort bookings
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <SearchComponent
                  searchTerm={search}
                  setSearchTerm={setSearch}
                  placeholder="Search by name, email or phone..."
                  className="w-full"
                />

                <SelectComponent
                  values={["newest", "oldest"]}
                  selectedValue={sort}
                  onSelect={(val) => setSort(val as sortType)}
                  label="Sort By"
                  placeholder="Sort"
                  clearable={false}
                />

                {/* <SelectComponent
              
               /> */}
              </div>

              <div className="overflow-x-auto">
                {loading ? (
                  <BookingTableSkeleton />
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Check-in</TableHead>
                        <TableHead>Check-out</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {bookings &&
                        bookings.map((booking) => (
                          <TableRow key={booking._id}>
                            <TableCell className="font-medium">
                              {booking.name}
                            </TableCell>
                            <TableCell>{booking.email}</TableCell>
                            <TableCell>{booking.phone}</TableCell>
                            <TableCell>
                              {formatDateTime(booking.checkIn)}
                            </TableCell>
                            <TableCell>
                              {formatDateTime(booking.checkOut)}
                            </TableCell>
                            <TableCell className="max-w-xs truncate">
                              {booking.message}
                            </TableCell>
                            <TableCell className="flex gap-4">
                              <Pencil
                                size={18}
                                className={`cursor-pointer text-primary hover:text-primary/70 ${
                                  deleting
                                    ? "opacity-50 pointer-events-none"
                                    : ""
                                }`}
                                onClick={() => {
                                  setSelectedBooking(booking);
                                  setOpenEdit(true);
                                }}
                              />
                              <Trash2
                                size={18}
                                className={`cursor-pointer text-red-600 hover:text-red-500 ${
                                  deleting
                                    ? "opacity-50 pointer-events-none"
                                    : ""
                                }`}
                                onClick={() => {
                                  if (!deleting) {
                                    handleDeleteClick(booking._id);
                                  }
                                }}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                )}
              </div>
              {bookings.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  No bookings found
                </div>
              )}

              <PaginationComponent
                currentPage={page}
                handlePageChange={setPage}
                itemsPerPage={10}
                totalPages={totalPages}
                totalItems={totalItems}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <BookingFormModal
        isOpen={openEdit}
        setOpen={setOpenEdit}
        booking={selectedBooking}
      />
    </>
  );
};

export default BookingsLists;
