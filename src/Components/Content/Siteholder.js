import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useState } from "react";

const Siteholder = () => {

  const [data, setData] = useState([]);
  const [site, setSite] = useState([]);
  const APII = "https://kontests.net/api/v1/sites";

  const fetchApiData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(APII);
  }, []);

  const handleClick = ( ) => {
    // setSite(data[2]);
    // console.log(item);
    

  };

  return (
    
    <div className="contentholder">
      <div className="main-container">
        <div className="box">
          <Stack direction="row" spacing={3}>
            {data.map((item, id) => (
              <Chip label={item[0]} key={id}  component="a" clickable onClick={handleClick}  />
            ))}
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Siteholder;
