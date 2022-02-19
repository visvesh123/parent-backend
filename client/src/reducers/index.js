import { combineReducers } from "redux";
import {notiReducer ,notiSomReducer} from "./notiReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import securityReducer from "./securityReducer";
import {attendanceReducer ,attendanceSomReducer} from "./attendanceReducer";
import resetPassReducer from "./resetPassReducer";
import {
  minor1Reducer,
  minor2Reducer,
  finalReducer,
  finalSomReducer,
  suppleReducer,
  majorReducer,
  internalReducer,
  cgpaReducer,
  cgpaSomReducer,
} from "./gradeReducer";
import complaintReducer from "./complaintReducer";
import studentReducer from "./studentReducer";
import secDetReducer from "./secDetReducer";
import secSubmitReducer from "./secSubmitReducer";
import allStudentReducer from "./allStudentReducer";
import latestRecordSec from './latestRecordSec';
import imageReducer from './imageReducer';

export default combineReducers({
  notifications: notiReducer,
  notifications_som: notiSomReducer,
  auth: authReducer,
  student: studentReducer,
  errors: errorReducer,
  security: securityReducer,
  attendance: attendanceReducer,
  attendance_som: attendanceSomReducer,
  reset: resetPassReducer,
  minor1: minor1Reducer,
  minor2: minor2Reducer,
  internals: internalReducer,
  major: majorReducer,
  final: finalReducer,
  final_som: finalSomReducer,
  supplementary: suppleReducer,
  cgpa: cgpaReducer,
  cgpa_som: cgpaSomReducer,
  sec: secDetReducer,
  secSubmit: secSubmitReducer,
  latestRec : latestRecordSec,
  complaint: complaintReducer,
  records: allStudentReducer,
  image : imageReducer
});
