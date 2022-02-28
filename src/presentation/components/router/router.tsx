import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "@/presentation/pages";

import { ValidationSpy } from "@/presentation/test"; //Remover

const Router: React.FC = () => {
  const validationSpy = new ValidationSpy(); //Remover
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login validation={validationSpy} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
