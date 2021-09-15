import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
export default function EditProfile({ profileData, setProfileData }) {
  const history = useHistory();
  const { id } = useParams();
  const [name, setName] = useState(profileData.name);
  const [mobile, setMobile] = useState(profileData.mobile);
  const [txt, setTxt] = useState(profileData.txt);
  const [profPic, setProfPic] = useState(profileData.profPic);
  function handleSubmit() {
    setProfileData({
      ...profileData,
      id,
      name,
      mobile,
      txt,
      profPic
    });
    history.push(`/profile/1`);
    alert("Profile is updated !!");
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
            type="text"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-12">
          <label style={{ float: "left" }}>Description</label>
          <textarea
            type="text"
            name="mobile"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
            className="form-control"
            rows="4"
          ></textarea>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-12">
          <label style={{ float: "left" }}>Profile Pic</label>
          <input
            type="text"
            name="Picture"
            value={profPic}
            onChange={(e) => setProfPic(e.target.value)}
            className="form-control"
          />
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
