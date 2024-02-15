import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import {useParams, useNavigate } from "react-router-dom";
import { useUser } from "../users/UserContext"; // Assuming you have a user context

export default function Admin() {
  const [users, setUsers] = useState([]);
  const { userDetails } = useUser(); // Get user details from context
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (!userDetails) {
      // If user is not logged in, redirect to login page
      navigate("/Signin");
    } else {
      loadUsers();
    }
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8082/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8082/user/${id}`);
    loadUsers();
  };
  const openDocument = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div></div>
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Document</th>
                <th scope="col">Subject</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => openDocument(user.document)}
                    >
                      View Document
                    </button>
                  </td>

                  <td>{user.subject}</td>
                  <td>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
