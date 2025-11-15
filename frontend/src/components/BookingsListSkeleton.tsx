import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function BookingTableSkeleton() {
  const rows = Array(5).fill(0);

  return (
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
        {rows.map((_, idx) => (
          <TableRow key={idx}>
            <TableCell>
              <Skeleton className="h-4 w-32" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-40" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-32" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-24" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-24" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-64" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
