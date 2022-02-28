import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "@/presentation/pages";

import { ValidationStub } from "@/presentation/test"; //Remover

const Router: React.FC = () => {
  const validationSpy = new ValidationStub(); //Remover
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login validation={validationSpy} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
