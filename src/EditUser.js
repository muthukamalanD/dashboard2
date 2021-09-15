import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
export default function EditUser() {
  const history = useHistory();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState(new Date().toDateString());

  const handleSubmit = () => {
    editUser(name, phone, email, time);
  };
  function getUser() {
    fetch(`https://60c83b2fafc88600179f660c.mockapi.io/user/users/${id}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => {
        setName(data.name);
        setphone(data.phone);
        setEmail(data.email);
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getUser();
  }, []);
  function editUser(name, phone, email, time) {
    fetch(`https://60c83b2fafc88600179f660c.mockapi.io/user/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        createdAt: time
      })
    })
      .then((data) => data.json())
      .then((data) => history.push("/users"))
      .then((data) => alert("Updated successfully"))
      .catch((e) => console.log(e));
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <label style={{ float: "left" }}>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-12">
          <label style={{ float: "left" }}>Phone</label>
          <input
            type=""
            name="phone"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-12">
          <label style={{ float: "left" }}>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-12">
          <label style={{ float: "left" }}>Create At : {time}</label>
          <br />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-12">
          <input
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
            value="Update"
          />
        </div>
      </div>
    </div>
  );
}
