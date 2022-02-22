import axios from "axios";
import web from "../apis/web";

// Notifications
export const fetchNotifications = () => async (dispatch, getState) => {
  const response = await web.get("/notifications");
  dispatch({ type: "FETCH_NOTIFICATION", payload: response.data });
  //console.log(response.data.item[0].From);
};

//Som Notifications
export const fetchSomNotifications = () => async (dispatch, getState) => {
  const response = await web.get("/som/notifications");
  dispatch({ type: "FETCH_SOM_NOTIFICATION", payload: response.data });
  //console.log(response.data.item[0].From);
};

// Security

export const fetchInOut = () => async (dispatch, getState) => {
  const response = await web.get("/security", {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  dispatch({ type: "FETCH_INOUT", payload: response.data });
  // console.log(response.data.security);
};

// Attendance

export const fetchAttendance = (semester) => async (dispatch, getState) => {
  const response = await web.get(`/attendance/${semester}`, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  dispatch({ type: "FETCH_ATTENDANCE", payload: response.data });
  // console.log(response.data);
};

export const fetchSomAttendance = (semester) => async (dispatch, getState) => {
  const response = await web.get(`/som/attendance/${semester}`, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  dispatch({ type: "FETCH_SOM_ATTENDANCE", payload: response.data });
  // console.log(response.data);
};

// Student fetch

export const fetchStudent = () => async (dispatch, getState) => {
  const response = await web.get("/profile", {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  dispatch({ type: "FETCH_STUDENT", payload: response.data.user });
  //console.log(response.data.user);
};

//som student fetch
export const fetchSomStudent = () => async (dispatch, getState) => {
  const response = await web.get("/som/profile", {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  dispatch({ type: "FETCH_SOM_STUDENT", payload: response.data.user });
  //console.log(response.data.user);
};

// Reset Password

export const resetPassword = (userData) => (dispatch) => {
  axios
    .post("/portal/forgotpassword", userData)
    .then((res) => {
      dispatch({
        type: "RESET_PASSWORD",
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: "GET_ERRORS",
        payload: "error",
      })
    );
};

// update Password

export const updatePassword = ({ password, token }) => (dispatch) => {
  axios
    .post(`/portal/reset/${token}`, { password })
    .then((res) => {
      dispatch({
        type: "UPDATE_PASSWORD",
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data,
      })
    );
};

// fetch Minor1

export const fetchMinor1 = (semester) => async (dispatch, getState) => {
  const response = await web.get(`/M1/${semester}`, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  dispatch({ type: "FETCH_MINOR1", payload: response.data.marks });
  //console.log(response.data.marks);
};

// fetch Minor2

export const fetchMinor2 = (semester) => async (dispatch, getState) => {
  const response = await web.get(`/M2/${semester}`, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  dispatch({ type: "FETCH_MINOR2", payload: response.data.marks });
  // console.log(response.data.marks);
};

// fetch Final

export const fetchFinal = (semester) => async (dispatch, getState) => {
  const response = await web.get(`/final/${semester}`, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  dispatch({ type: "FETCH_FINAL", payload: response.data.marks });
  //console.log(response.data.marks);
};

//fetch som final

export const fetchSomFinal = (semester) => async (dispatch, getState) => {
  const response = await web.get(`/som/final/${semester}`, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  console.log(response.data);
  dispatch({ type: "FETCH_SOM_FINAL", payload: response.data.marks });
  //console.log(response.data.marks);
};

//fetch Supplementary
export const fetchSupplementary = (semester) => async (dispatch, getState) => {
  const response = await web.get(`/supplementary/${semester}`, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  dispatch({ type: "FETCH_SUPPLEMENTARY", payload: response.data.marks });
  //console.log(response.data.marks);
};

//fetch Internals
export const fetchInternals = (semester) => async (dispatch, getState) => {
  const response = await web.get(`/internal/${semester}`, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  dispatch({ type: "FETCH_INTERNALS", payload: response.data.marks });
  //console.log(response.data.marks);
};

// fetch Major
export const fetchMajor = (semester) => async (dispatch, getState) => {
  const response = await web.get(`/major/${semester}`, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  dispatch({ type: "FETCH_MAJOR", payload: response.data.marks });
  //console.log(response.data.marks);
};

// fetch CGPA
export const fetchCGPA = () => async (dispatch, getState) => {
  const response = await web.get("/cgpa", {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  dispatch({ type: "FETCH_CGPA", payload: response.data.CGPA });
  //console.log(response.data.CGPA);
};

// fetch som CGPA
export const fetchSomCGPA = () => async (dispatch, getState) => {
  const response = await web.get("/som/cgpa", {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
  dispatch({ type: "FETCH_SOM_CGPA", payload: response.data.CGPA });
  //console.log(response.data.CGPA);
};

//send Complaint

export const sendComplaint = (data) => (dispatch) => {
  axios
    .post("/portal/complaint", data, {
      headers: { Authorization: localStorage.getItem("jwtToken") },
    })
    .then((res) => {
      dispatch({ type: "SEND_COMPLAINT" });
    });
};

export const fetchType = (griev) => {
  return {
    type: "FETCH_TYPE",
    payload: {
      griev: griev,
    },
  };
};

export const fetchMail = (mail) => {
  return {
    type: "FETCH_MAIL",
    payload: {
      mail: mail,
    },
  };
};

export const fetchDescription = (desc) => {
  return {
    type: "FETCH_DESC",
    payload: {
      desc: desc,
    },
  };
};

//Security  Portal
// fetch Student for security portal

export const fetchsecDetails = (username) => (dispatch) => {
  axios
    .post("/admin/searchDisplay", username)
    .then((res) => {
      // console.log(res.data);
      dispatch({
        type: "SEC_DETAILS",
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: "GET_ERRORS",
        payload: "error",
      })
    );
};


export const addCheckingDetails = ({ username, MOVING, REMARKS }) => (
  dispatch
) => {
  axios
    .post("/admin/addChecking", { username, MOVING, REMARKS })
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: "SEC_SUBMIT",
      });
    })
    .catch((err) =>
      dispatch({
        type: "GET_ERRORS",
        payload: "error",
      })
    );
};

// Send message to Parent (Security)

export const sendMessageSecurity = () => (
  dispatch
) => {
  axios
    .get("/admin/sendMessage")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: "SEND_MESSAGE",
        payload : "Message Sent"
      });
    })
    .catch((err) =>
      dispatch({
        type: "GET_ERRORS",
        payload: "error",
      })
    );
};

// FETCH LATEST RECORD 

export const fetchLatestRecord = (htno) => (
  dispatch
) => {
  axios
    .get(`admin/latestRecord/${htno}`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: "LATEST_RECORD",
        payload : res.data
      });
    })
    .catch((err) =>
      dispatch({
        type: "GET_ERRORS",
        payload: "Couldn't fetch ",
      })
    );
};

// FETCH IMAGE FROM s3

export const fetchImage= (batch , htno) => (
  dispatch
) => {
  axios
    .get(`/s3/${batch}/${htno}`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: "IMAGE_RECORD",
        payload : res.data
      });
    })
    .catch((err) =>
      dispatch({
        type: "GET_ERRORS",
        payload: "Couldn't fetch ",
      })
    );
};



// fetch In Out for sec

export const fetchsecUsername = (username) => {
  return {
    type: "SEC_USER",
    payload: {
      username: username,
    },
  };
};

export const fetchsecInOut = (inout) => {
  return {
    type: "SEC_INOUT",
    payload: {
      MOVING: inout,
    },
  };
};

export const fetchsecRemarks = (remarks) => {
  return {
    type: "SEC_REMARKS",
    payload: {
      REMARKS: remarks,
    },
  };
};

export const allStudents = () => (dispatch) => {
  axios
    .get("/admin/allRecords")
    .then((res) => {
      // console.log(res.data);
      dispatch({
        type: "ALL_STUDENTS",
        payload: res.data.user,
      });
    })
    .catch((err) =>
      dispatch({
        type: "GET_ERRORS",
        payload: "error",
      })
    );
};
