import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import BottomCards from "./BottomCards";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import Header from "./Header";
import Navbar from "./Navbar";
import { PageNotFound } from "./PageNotFound";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import ProjectsCard from "./ProjectsCard";
import Sidebar from "./Sidebar";
import SmallCards from "./SmallCards";
import "./styles.css";
import Users from "./Users";

export default function App() {
  const data = profileDetails();
  const [profileData, setProfileData] = useState(data);
  return (
    <div className="App" id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar profileData={profileData} setProfileData={setProfileData} />
            <div className="container-fluid">
              <Switch>
                <Route exact path="/">
                  <Header title={"Dashboard"} />
                  <SmallCards />
                  <div className="row">
                    <ProjectsCard />
                    <BottomCards />
                  </div>
                </Route>
                <Route path="/profile/:id">
                  <Header title={"Profile Details"} />
                  <Profile
                    profileData={profileData}
                    setProfileData={setProfileData}
                  />
                </Route>
                <Route exact path="/edit-profile/:id">
                  <Header title={"Edit Profile Details"} />
                  <EditProfile
                    profileData={profileData}
                    setProfileData={setProfileData}
                  />
                </Route>
                <Route path="/users">
                  <Header title={"User Details"} />
                  <Users />
                </Route>
                <Route path="/create-user">
                  <Header title={"Create New User"} />
                  <CreateUser />
                </Route>
                <Route exact path="/edit-user/:id">
                  <Header title={"Edit User"} />
                  <EditUser />
                </Route>
                <Route path="/*">
                  <PageNotFound />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );

  function profileDetails() {
    return {
      id: 1,
      name: "Shri Krishna",
      profPic: "https://astrolinked.com/media/avatars/876/resized/500/tc.png",
      mobile: "9876543210",
      txt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
  }
}
