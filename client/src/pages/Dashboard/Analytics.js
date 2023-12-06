import React, { useEffect, useState } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "../../services/API";
import moment from "moment";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#5C8374",
    "#9EC8B9",
    "#8ACDD7",
    "#637E76",
    "#B6BBC4",
    "#8ADAB2",
    "#FAEED1",
    "#9AD0C2",
  ];

  // Get Blood Group Data
  const getBloodGroupData = async () => {
    try {
      const response = await API.get("/analytics/bloodGroups-data");
      if (response.data?.success) {
        setData(response.data.bloodGroupData);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Lifecycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);

  // get function
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
        console.log(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex flex-row flex-wrap">
        {data?.map((record, i) => (
          <div
            className="card ms-2 p-1"
            key={i}
            style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
          >
            <div className="card-body">
              <h1 className="card-title bg-light text-dark text-center">
                {record.bloodGroup}
              </h1>
              <p className="card-text">
                Total In : <b>{record.totalIn}</b>(ML)
              </p>
              <p className="card-text">
                Total Out : <b>{record.totalOut}</b>(ML)
              </p>
            </div>
            <div className="card-footer text-light bg-dark text-center">
              Total Available : <b>{record.availableBlood}</b>(ML)
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="container my-3">
      <h1 className="text-center my-3">Recent Blood Transactions</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th> 
              <th scope="col">Quantity</th>
              <th scope="col">Donor Email</th>
              <th scope="col">Time & Date</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity}(ML)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
