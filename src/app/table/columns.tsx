"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string;
  name: string;
  email: string;
  status: "pending" | "processing" | "active" ;
};




export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
  },

  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("name")}</div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("email")}</div>
      );
    },
  },

  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => {
      return row.getValue("status") == "pending" ? (
        <div className="font-medium text-red-500 shadow-sm bg-gray-50 p-3 w-1/11 text-center">
          {row.getValue("status")}
        </div>
      ) : row.getValue("status") == "processing" ? (
        <div className=" font-medium text-yellow-800 shadow-sm bg-gray-50 p-3 w-1/11 text-center">
          {row.getValue("status")}
        </div>
      ) : row.getValue("status") == "active" ? (
        <div className=" font-medium text-blue-500 shadow-sm bg-gray-50 p-3 w-1/11 text-center">
          {row.getValue("status")}
        </div>
      ) : (
        <div className="font-medium text-blue-500 shadow-sm bg-gray-50 p-3 w-1/11 text-center">
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-left">Action</div>,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              View User
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit User</DropdownMenuItem>
            <DropdownMenuItem>Delete User</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
