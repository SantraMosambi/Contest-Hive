import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";

const columns = [
  { field: "name", headerName: "Contest Name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  
];

const rows = data.map((row) => ({
  name: row.id,
}));

const MainTable = () => {
  const [data, setData] = useState([]);

  const API = "https://kontests.net/api/v1/all";

  const fetchApiData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <div className="contentholdr">
      <div className="main-container">
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </div>
  );
};

export default MainTable;
