import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import Complaint from "./Components/Complaint/Complaint";
import Navbar1 from "./Components/NavBar1";
import HorizontalLinearStepper from "./Components/Complaint/Stepper";
import Grade from "./Components/Grades/Grade";
import Att from "./Components/Attendance/Attendance";
import Loading from "./Components/Animation/loading";
import NormalLoginForm from "./Components/Login/Login";
import Sec_Secured from "./Components/Security/Security";
import "./App.css";
import Sec_Summary from "./Components/Security/Security";
import PrivateRoute from "./Components/PrivateRoute";
import ResetPassword from "./Components/ResetPassword/reset";
import Upload from "./Components/Admin/Upload";
import Gif from "./Components/Loading/gif";
import AdminLogin from "./Components/Admin/AdminLogin";
import PostExams from "./Components/Admin/Exam";
import PostAtt from "./Components/Admin/Attendance";
import AdminHome from "./Components/Admin/AdminHome";
import GradesTable from "./Components/Admin/GradesTable";
import AttendanceTable from "./Components/Admin/AttandanceTable";
import ViewNoti from "./Components/Admin/ViewNoti";
import VerticalTabs from "./Components/SecutityAdmin/SecHome";

import { store } from "./index";
function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/complaint" component={Complaint} />
        <PrivateRoute exact path="/grade" component={Grade} />
        <PrivateRoute exact path="/attendance" component={Att} />
        <Route exact path="/login" component={NormalLoginForm} />
        <PrivateRoute exact path="/summary" component={Sec_Summary} />
        <Route exact path="/reset/:token" component={ResetPassword} />

        <Route exact path="/security-portal" component={VerticalTabs} />

        {/* Admin */}
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/exams" component={PostExams} />
        <Route exact path="/att" component={PostAtt} />
        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/adminlogin" component={AdminLogin} />
        <Route exact path="/Grades" component={GradesTable} />
        <Route exact path="/Attend" component={AttendanceTable} />
        <Route exact path="/ViewNoti" component={ViewNoti} />
      </Switch>
    </div>
  );
}

export default App;
