import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import SearchPage from "./components/SearchPage/SearchPage";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#232a34",
    },
    white: {
      main: "#fff",
    },
    secondary: {
      main: "#05a081",
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={outerTheme}>
        <SearchPage />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
