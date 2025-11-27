import React from "react";
import { User } from "../types";

interface Props {
  users?: User[] | null;
  onSelect: (user: User) => void;
}

export default function UserTable({ users, onSelect }: Props) {
  const safeUsers = Array.isArray(users) ? users : [];

  if (safeUsers.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 border mt-3">
        No users found.
      </div>
    );
  }
  return (
    <table className="table-auto w-full border mt-3">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="p-2">ID</th>
          <th className="p-2">Name</th>
          <th className="p-2">Email</th>
          <th className="p-2">Role</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {safeUsers.map((u) => (
          <tr key={u.id} className="border-b hover:bg-gray-50">
            <td className="p-2">{u.id}</td>
            <td className="p-2">{u.name}</td>
            <td className="p-2">{u.email}</td>
            <td className="p-2">{u.role}</td>
            <td className="p-2">
              <button
                onClick={() => onSelect(u)}
                className="px-3 py-1 bg-blue-600 text-white rounded"
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
