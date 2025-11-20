// app/components/UserListServer.tsx
type User = {
  id: number;
  name: string;
  email: string;
};

async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  return res.json();
}

export default async function UserListServer() {
  const users = await fetchUsers();
  const renderTime = new Date().toLocaleTimeString();

  return (
    <div>
      <div className="mb-3 text-sm text-gray-500 text-center">Server rendered at {renderTime}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition flex flex-col break-all whitespace-normal overflow-hidden"
          >
            <h2 className="text-lg text-black font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
