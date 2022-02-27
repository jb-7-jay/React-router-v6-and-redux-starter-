import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Users from "../../utils/Users";

const CustomerDetails = () => {
  const params = useParams();
  const [customer, setCustomer] = useState({
    id: "",
    name: "",
    email: "",
  });
  const [customerFound, setCustomerFound] = useState(true);

  useEffect(() => {
    const user = Users.find((user) => user.id === Number(params.customerId));
    if (user) {
      setCustomer(user);
    } else {
      setCustomerFound(false);
    }
  }, [params]);

  return (
    <>
      {customerFound ? (
        <div>
          CustomerDetails - {customer.name} - {customer.email}
        </div>
      ) : (
        <div>User with this ID Not Found</div>
      )}
    </>
  );
};

export default CustomerDetails;
