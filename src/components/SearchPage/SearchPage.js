import { styled, alpha } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Header from "../Header/Header";
import { Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    backgroundColor: "white",
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: "60ch",
    },
  },
}));

export default function SearchPage() {
  return (
    <>
      <Header />
      <Box
        component={"div"}
        sx={{
          width: "100%",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box
          component={"img"}
          src={"https://cdn.wallpapersafari.com/7/35/J5KHUQ.jpg"}
          width="100%"
          height="100%"
          sx={{
            position: "absolute",
            objectFit: "cover",
            left: "0",
            top: "0",
            bottom: "0",
            right: "0",
            zIndex: -10,
          }}
        ></Box>{" "}
        <Typography
          sx={{ color: "white", width: "580px", py: 1 }}
          component="h3"
          variant={"h3"}
          textAlign={"left"}
        >
          Photo by Matt Hardy The best free stock photos, royalty free images &
          videos shared by creators.
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
    </>
  );
}
