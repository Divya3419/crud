import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./Employee.module.css";
const EmployeeDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  const [employee, setEmployee] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://blueproduct.herokuapp.com/employee")
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (id) {
      let temp = data.find((item) => item.id === Number(id));
      temp && setEmployee(temp);
    }
  }, [data, id]);
  console.log(employee);
  const handleDelete = (id) => {
    axios
      .delete(`https://blueproduct.herokuapp.com/employee/${id}`)
      .then(() => {
        navigate("/");
      });
  };
  return (
    <div className={styles.card}>
      <div>
        <img src={employee.pic} alt="" />
      </div>
      <div>
        <h2>Name : {employee.name}</h2>
        <h3>Salary : {employee.salary}</h3>
        <h3>Age : {employee.age}</h3>
        <button onClick={() => handleDelete(employee.id)}>Delete</button>
        <Link to={`/update/${employee.id}`}>
          <button>Update Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDetail;
