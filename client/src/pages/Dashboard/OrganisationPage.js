import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";
import { useSelector } from "react-redux";

const OrganisationPage = () => {
  // get current user
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  //find ORG records
  const getOrg = async () => {
    try {
      if (user?.role === "donar") {
        const { data } = await API.get("/inventory/get-organisations");
        if (data?.success) {
          setData(data?.organisations);
        } else {
          console.error("Failed to fetch organisations:", data?.message);
        }
      }
      if (user?.role === "hospital") {
        const { data } = await API.get("/inventory/get-orgnaisation-for-hospital");
        if (data?.success) {
          setData(data?.organisations);
        } else {
          console.error("Failed to fetch organisations for hospital:", data?.message);
        }
      }
    } catch (error) {
      console.error("Error fetching organisations:", error);
    }
  };
  
  useEffect(() => {
    getOrg();
  }, [user]);

  return (
    <Layout>
      <table className="table  mt-3 ms-3">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.organisationName}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default OrganisationPage;
