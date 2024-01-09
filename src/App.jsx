import React from "react";
import { BrowserRouter } from "react-router-dom";

import AllRouter from "./routes/AllRouter";
import Container from "./layout/Container";
import Header from "./layout/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <AllRouter />
      </Container>
    </BrowserRouter>
  );
};

export default App;
