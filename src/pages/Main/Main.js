import { Button, Container, Tabs, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getNewsByCategory } from "../../api";
import PhotoCards from "../../components/PhotoCards/PhotoCards";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Main = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("world");
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(async () => {
    setLoading(true);
    setError(false);
    const obj = await getNewsByCategory(category, index);
    if (obj.success) setData(obj.data.photos);
    else setError(true);
    setLoading(false);
  }, [category, index]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    console.log(event);
    setValue(newValue);
  };

  return (
    <Container maxWidth={"xl"}>
      <Tabs
        value={value}
        centered
        sx={{ my: 3 }}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Nature" onClick={() => setCategory("Nature")} />
        <Tab label="Car" onClick={() => setCategory("Car")} />
        <Tab label="Travel" onClick={() => setCategory("Travel")} />
        <Tab label="Animal" onClick={() => setCategory("Animal")} />
        <Tab label="Phone" onClick={() => setCategory("Phone")} />
        <Tab label="Sport" onClick={() => setCategory("Sport")} />
      </Tabs>
      <PhotoCards data={data} />
      <Stack spacing={2}>
        {" "}
        <Pagination
          count={10}
          onChange={(e, i) => setIndex(i)}
          color="primary"
          sx={{ my: 2, mx: "auto" }}
        />
      </Stack>
    </Container>
  );
};

export default Main;
