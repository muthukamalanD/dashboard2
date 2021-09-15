import { useHistory } from "react-router-dom";

export default function Header({ title }) {
  let history = useHistory();
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <input
        className="btn btn-danger btn-sm"
        type="submit"
        value="Back"
        onClick={() => history.goBack()}
      />
      <h1 className="h3 mb-0 text-gray-800">{title}</h1>
      <div
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        onClick={() =>
          title === "User Details" ? history.push("/create-user") : ""
        }
      >
        <i className="fas fa-download fa-sm text-white-50"></i>
        {title === "User Details" ? "+ New User" : " Generate Report "}
      </div>
    </div>
  );
}
