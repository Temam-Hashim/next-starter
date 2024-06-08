import { User, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      name: "Temam",
      email: "temam@example.com",
      status: "pending",
    },
    {
      id: "2",
      name: "Sara",
      email: "kas@example.com",
      status: "active",
    },
    {
      id: "3",
      name: "Kemal",
      email: "kemal@example.com",
      status: "processing",
    },
    {
      id: "4",
      name: "Beti",
      email: "beti@example.com",
      status: "active",
    },
    {
      id: "5",
      name: "Hana",
      email: "hana@example.com",
      status: "processing",
    },
    {
      id: "6",
      name: "Yared",
      email: "yared@example.com",
      status: "active",
    },

    // ...
  ];
}

export default async function Table() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10 h-screen">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
