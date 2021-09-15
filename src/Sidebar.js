import { BrowserRouter as Router, useHistory } from "react-router-dom";

export default function Sidebar() {
  const history = useHistory();
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/*<!-- Sidebar - Brand -->*/}
      <div
        className="sidebar-brand d-flex align-items-center justify-content-center"
        style={{ cursor: "pointer" }}
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div
          className="sidebar-brand-text mx-3"
          onClick={() => history.push("/")}
        >
          SB Admin <sup>2</sup>
        </div>
      </div>

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider my-0" />

      {/*<!-- Nav Item - Dashboard -->*/}
      <li className="nav-item active" style={{ cursor: "pointer" }}>
        <div className="nav-link" onClick={() => history.push("/")}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </div>
      </li>

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider" />

      {/*<!-- Heading -->*/}
      <div className="sidebar-heading">menu</div>

      {/*<!-- Nav Item - Pages Collapse Menu -->*/}
      <li className="nav-item" style={{ cursor: "pointer" }}>
        <div
          className="nav-link collapsed"
          data-toggle="collapse"
          onClick={() => history.push("/profile/1")}
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Profile</span>
        </div>
      </li>
      <li className="nav-item" style={{ cursor: "pointer" }}>
        <div
          className="nav-link collapsed"
          data-toggle="collapse"
          onClick={() => history.push("/users")}
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>User</span>
        </div>
      </li>
      <li className="nav-item" style={{ cursor: "pointer" }}>
        <div
          className="nav-link collapsed"
          data-toggle="collapse"
          onClick={() => history.push("/create-user")}
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Create User</span>
        </div>
      </li>

      {/*<!-- Nav Item - Utilities Collapse Menu -->*/}

      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider" />

      {/*<!-- Sidebar Toggler (Sidebar) -->*/}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      {/*<!-- Sidebar Message -->*/}
    </ul>
  );
}
