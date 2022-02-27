import React from "react";
import Customer from "../Customer/index";
import General from "../Customer/General";
import CustomerDetails from "../Customer/CustomerDetails";
import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/index";
import ProtectedRouteHOC from "../../routes/ProtectedRouteHOC";
import DashBoard from "../Dashboard";
import Navbar from "../Navbar/index";

const DashBoardLayout = () => {
  return (
    <>
      <Navbar />
      <ProtectedRouteHOC>
        <Routes>
          <Route path="/">
            <Route index element={<DashBoard />} />
            <Route path="customer" element={<Customer />}>
              <Route index element={<h5>Hello default</h5>} />
              <Route path="general" element={<General />} />
              <Route path=":customerId" element={<CustomerDetails />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />,
        </Routes>
      </ProtectedRouteHOC>
    </>
  );
};

export default DashBoardLayout;
