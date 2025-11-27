import React, { useEffect, useState } from "react";
import { usersApi } from "./api";
import { User } from "./types";
import UserTable from "./components/UserTable";
import UserDetail from "./components/UserDetail";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<User | null>(null);

  useEffect(() => {
    usersApi.getAll().then((r) => setUsers(r.data || []));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <UserTable users={users} onSelect={setSelected} />
      <UserDetail user={selected} />
    </div>
  );
}
