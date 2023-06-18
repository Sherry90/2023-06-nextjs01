import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "cask", name: "Sherry" },
    { id: "wine", name: "Shiraz" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li>
            <Link href={`/clients/${client.id}`} key={client.id}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
