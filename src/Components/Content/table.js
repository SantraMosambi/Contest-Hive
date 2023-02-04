import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";

const MainTable = () => {
  const [data, setData] = useState([]);

  const API = "https://kontests.net/api/v1/codeforces";

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



  const rows = data.map((row) => ({
    name: row.name,
    sTime: new Date(row.start_time).toLocaleString(),
    eTime: new Date(row.end_time).toLocaleString(),
    duration: new Date(row.duration).getHours(),
  }));

  const columns = [
    // { field: "id", headerName: "ID", width: 70},
    { field: "name", headerName: "Contest Name", width: 530 },
    { field: "sTime", headerName: "Start Time", width: 230 },
    { field: "eTime", headerName: "End Time", width: 230 },
    { field: "duration", headerName: "Duration", width: 130 },
    { field: "site", headerName: "Site", width: 130 },
  ];

  return (
    <div className="contentholdr">
      <div className="main-container">
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={() => generateRandom()}
          />
        </div>
      </div>
    </div>
  );
};

function generateRandom() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

export default MainTable;
