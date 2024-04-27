import { combineReducers } from "@reduxjs/toolkit";

import app from "./app";

const database = combineReducers({
  appService: app,
});

export default database;
