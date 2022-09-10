import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postData } from "../Redux/action";

import styles from "./Employee.module.css";
const EmployeeEdit = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");
  const [pic, setPic] = useState("");

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      name,
      salary,
      age,
      pic,
    };
    axios
      .put(`https://blueproduct.herokuapp.com/employee/${id}`, payload)
      .then((r) => {
        navigate("/");
      });
  };

  return (
    <div className={styles.detail}>
      <h1>Update Employee Detail</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Employeee Name"
        />
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Employee Salary"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Employee Age"
        />
        <input
          type="url"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
          placeholder="Employee Image"
        />
        <button style={{ width: "20%" }} type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EmployeeEdit;
