import { combineReducers } from "redux";
import routeList from "./routeList";
import region from "./region";
import transfer from "./transfer";

export default combineReducers({ region, routeList, transfer });
