import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";
import Link from "@mui/material/Link";

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

  const rows = data.map((row) => {
    const startTime = new Date(row.start_time);
    const endTime = new Date(row.end_time);
    const durationInSeconds = (endTime - startTime) / 1000;
    const durationInDays = Math.floor(durationInSeconds / (3600 * 24));
    const durationInHours = Math.floor((durationInSeconds % (3600 * 24)) / 3600);
    const durationInMinutes = Math.floor((durationInSeconds % 3600) / 60);
    const duration = durationInDays > 0 ? `${durationInDays} days and ${durationInHours.toString().padStart(2, '0')}:${durationInMinutes.toString().padStart(2, '0')} Hr` : `${durationInHours.toString().padStart(2, '0')}:${durationInMinutes.toString().padStart(2, '0')} Hr`;
  
    return {
      name: row.name,
      siteName: row.site,
      sTime: startTime.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) + ' ' + startTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
      eTime: endTime.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) + ' ' + endTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
      duration: duration,
      site: row.url,
    };
  });

  
  

  const columns = [
    // { field: "id", headerName: "ID", width: 70},
    {
      field: "name",
      headerName: "Contest Name",
      width: 530,
      renderCell: (cellValues) => {
        return (
          <Link
            href={cellValues.row.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cellValues.value}
          </Link>
        );
      },
    },
    { field: "sTime", headerName: "Start Time", width: 200 },
    { field: "eTime", headerName: "End Time", width: 200 },
    { field: "duration", headerName: "Duration", width: 190 },
    { field: "siteName", headerName: "Site Name", width: 130 },
  ];

  return (
    <div className="contentholdr">
      <div className="main-container">
        <div style={{ height: 700, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
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
