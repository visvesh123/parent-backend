import { combineReducers } from "redux";
import notiReducer from "./notiReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import securityReducer from "./securityReducer";
import attendanceReducer from "./attendanceReducer";
import resetPassReducer from "./resetPassReducer";
import {
  minor1Reducer,
  minor2Reducer,
  finalReducer,
  suppleReducer,
  majorReducer,
  internalReducer,
  cgpaReducer,
} from "./gradeReducer";
import complaintReducer from "./complaintReducer";
import studentReducer from "./studentReducer";
import secDetReducer from "./secDetReducer";
import secSubmitReducer from "./secSubmitReducer";
import allStudentReducer from "./allStudentReducer";

export default combineReducers({
  notifications: notiReducer,
  auth: authReducer,
  student: studentReducer,
  errors: errorReducer,
  security: securityReducer,
  attendance: attendanceReducer,
  reset: resetPassReducer,
  minor1: minor1Reducer,
  minor2: minor2Reducer,
  internals: internalReducer,
  major: majorReducer,
  final: finalReducer,
  supplementary: suppleReducer,
  cgpa: cgpaReducer,
  sec: secDetReducer,
  secSubmit: secSubmitReducer,
  complaint: complaintReducer,
  records: allStudentReducer,
});
