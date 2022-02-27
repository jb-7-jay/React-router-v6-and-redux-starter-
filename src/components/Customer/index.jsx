import React from "react";
import { Link, Outlet } from "react-router-dom";
import Users from "../../utils/Users";

const Customer = () => {
  return (
    <div>
      <h1>
        Customer Header - <Link to="/">Back to Dashboard</Link>
      </h1>
      <div>
        <Link to="/customer/general">Static comp example</Link> <br />
      </div>
      <br />
      <br />
      <div>
        {Users.map((user) => (
          <div key={user.id}>
            <Link to={`/customer/${user.id}`}>{user.name}</Link>
          </div>
        ))}
      </div>

      <div>
        <h4>Nested Routes component will load below</h4>
        <Outlet />
      </div>
      <h1>Customer Footer</h1>
    </div>
  );
};

export default Customer;
