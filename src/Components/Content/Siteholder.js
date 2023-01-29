import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useState } from "react";

const Siteholder = () => {
  const APII = "https://kontests.net/api/v1/sites";

  const fetchApiData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(APII);
  }, []);

  const datas = [
    { id: 1, name: "All" },
    { id: 2, name: "CodeChef" },
    { id: 3, name: "CodeForces" },
    { id: 4, name: "AtCoder" },
    { id: 5, name: "TopCoder" },
    { id: 6, name: "HackerRank" },
    { id: 7, name: "HackerEarth" },
    { id: 8, name: "LeetCode" },
    { id: 9, name: "Kick Start" },
    { id: 10, name: "Google Code Jam" },
  ];

  return (
    <div className="contentholder">
      <div className="main-container">
        <Stack direction="row" spacing={3}>
          {datas.map((item) => (
            <Chip label={item.name} />
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Siteholder;
