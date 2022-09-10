import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Employee.module.css";
const Employee = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://blueproduct.herokuapp.com/employee')
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <Link to="/create">
        <button className={styles.add}>Add New Employee</button>
      </Link>

      <div className={styles.container}>
        {data.map((ele) => {
          return (
            <Link className={styles.link} to={`/${ele.id}`} key={ele.id}>
              <div>
                <img src={ele.pic} alt="" />
                <h2>Name : {ele.name}</h2>
                <p>Salary : {ele.salary}</p>
                <p>Age : {ele.age}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Employee;
