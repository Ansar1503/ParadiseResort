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
import type { sortType } from "@/types/BookingType";
import { useFetchBookings } from "@/hooks/useFetchBookings";
import { BookingTableSkeleton } from "@/components/BookingsListSkeleton";
const mockBookings = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    checkIn: "2024-01-15",
    checkOut: "2024-01-20",
    message: "Celebrating anniversary, would love a room with ocean view",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1 (555) 234-5678",
    checkIn: "2024-01-18",
    checkOut: "2024-01-25",
    message: "Family vacation, kids are 8 and 10 years old",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    phone: "+1 (555) 345-6789",
    checkIn: "2024-01-22",
    checkOut: "2024-01-27",
    message: "Solo traveler, interested in diving activities",
  },
];

const BookingsLists = () => {
  const {
    // bookings,
    loading,
    page,
    setPage,
    search,
    setSearch,
    sort,
    setSort,
    totalPages,
    totalItems,
  } = useFetchBookings(1, 10);

  return (
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
                clearable
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
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {mockBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">
                          {booking.name}
                        </TableCell>
                        <TableCell>{booking.email}</TableCell>
                        <TableCell>{booking.phone}</TableCell>
                        <TableCell>{booking.checkIn}</TableCell>
                        <TableCell>{booking.checkOut}</TableCell>
                        <TableCell className="max-w-xs truncate">
                          {booking.message}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
            {mockBookings.length === 0 && (
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
  );
};

export default BookingsLists;
