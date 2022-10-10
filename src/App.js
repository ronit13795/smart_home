import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import context from "./context";

function App() {
  return (
    <div>
      <context.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/"></Route>
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
