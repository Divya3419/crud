import React from "react";
import { Route, Routes } from "react-router-dom";
import Employee from "../component/Employee";
import EmployeeDetail from "../component/EmployeeDetail";
import EmployeeEdit from "../component/EmployeeEdit";
import EmployeeForm from "../component/EmployeeForm";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/create" element={<EmployeeForm />} />
        <Route path="/:id" element={<EmployeeDetail />} />
        <Route path='/update/:id' element={<EmployeeEdit/>}/>
      </Routes>
    </div>
  );
};

export default MainRoute;
