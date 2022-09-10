import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postData } from "../Redux/action";

import styles from "./Employee.module.css";
const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");
  const [pic, setPic] = useState("");
  const navigate = useNavigate();

  const data = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      name,
      salary,
      age,
      pic,
    };
    dispatch(postData(payload)).then((r) => {
      navigate("/");
    });
  };

  return (
    <div className={styles.detail}>
      <h1>Add New Employee Detail</h1>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
