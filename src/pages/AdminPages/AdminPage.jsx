import React from "react";
import Container from "../../layout/Container";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";

const AdminPage = () => {
  return (
    <Container>
      <AdminNavbar />
      <Outlet />
    </Container>
  );
};

export default AdminPage;
