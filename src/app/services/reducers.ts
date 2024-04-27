import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import database from "app/modules/Database/services";
import app from "app/services/app";

const combinedReducer = combineReducers({
  appService: app,
  database,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return combinedReducer(state, action);
};

export default rootReducer;
