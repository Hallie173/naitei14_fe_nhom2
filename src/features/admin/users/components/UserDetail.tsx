import React, { useState } from "react";
import { User } from "../types";
import { usersApi } from "../api";

interface Props {
  user: User | null;
}

export default function UserDetail({ user }: Props) {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState<User | null>(user);

  if (!user) return <div className="mt-3">Select a user</div>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!form) return;
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!form) return;
    await usersApi.update(form.id, form);
    alert("User updated");
    setEdit(false);
  };

  return (
    <div className="p-4 border rounded mt-4 bg-white shadow">
      <h2 className="text-xl font-bold mb-3">User Detail</h2>

      {edit ? (
        <>
          <div className="mb-2">
            <label>Name</label>
            <input
              className="border p-2 w-full"
              name="name"
              value={form?.name || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label>Email</label>
            <input
              className="border p-2 w-full"
              name="email"
              value={form?.email || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label>Role</label>
            <input
              className="border p-2 w-full"
              name="role"
              value={form?.role || ""}
              onChange={handleChange}
            />
          </div>

          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-600 text-white rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setEdit(false)}
            className="px-3 py-1 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Role:</b> {user.role}
          </p>

          <button
            onClick={() => setEdit(true)}
            className="px-3 py-1 bg-blue-600 text-white rounded mt-3"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}
