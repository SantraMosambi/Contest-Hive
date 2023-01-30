import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// import { useEffect } from "react";
// import { useState } from "react";

const Siteholder = () => {
  // const APII = "https://kontests.net/api/v1/sites";

  // const fetchApiData = async (url) => {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchApiData(APII);
  // }, []);

  const datas = [
    { id: 1, name: "All" },
    { id: 2, name: "CodeChef" },
    { id: 3, name: "CodeForces" },
    { id: 4, name: "AtCoder" },
    { id: 5, name: "HackerRank" },
    { id: 6, name: "HackerEarth" },
    { id: 7, name: "LeetCode" },
    { id: 8, name: "Kick Start" },
  ];

  return (
    <div className="contentholder">
      <div className="main-container">
        <div className="box">
          <Stack direction="row" spacing={3}>
            {datas.map((item, id) => (
              <Chip label={item.name} key={id}  />
            ))}
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Siteholder;
