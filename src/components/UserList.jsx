import React, { useEffect } from "react";
import useUserStore from "../zustand/userStore";
import { Link } from "react-router-dom";

const UserList = () => {
  const { users, loading, error, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="list-disc pl-5">
      {users.map((user) => (
        <li key={user.id}>
          <Link
            to={`/user/${user.id}`}
            className="text-blue-600 hover:underline"
          >
            {user.name} - {user.email}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
