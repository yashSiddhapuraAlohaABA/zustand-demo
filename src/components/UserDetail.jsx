import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useUserStore from "../zustand/userStore";

const UserDetail = () => {
  const { id } = useParams();
  const { selectedUser, fetchUserById, userLoading, userError } =
    useUserStore();

  useEffect(() => {
    fetchUserById(id);
  }, [id, fetchUserById]);

  if (userLoading) return <p>Loading user details...</p>;
  if (userError) return <p>Error: {userError}</p>;
  if (!selectedUser) return <p>No user found.</p>;

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{selectedUser.name}</h2>
      <p>
        <strong>Email:</strong> {selectedUser.email}
      </p>
      <p>
        <strong>Phone:</strong> {selectedUser.phone}
      </p>
      <p>
        <strong>Website:</strong> {selectedUser.website}
      </p>
      <p>
        <strong>Company:</strong> {selectedUser.company.name}
      </p>
      <p>
        <strong>Address:</strong> {selectedUser.address.street},{" "}
        {selectedUser.address.city}
      </p>
      <Link to="/" className="text-blue-600 hover:underline mt-4 block">
        Back to User List
      </Link>
    </div>
  );
};

export default UserDetail;
