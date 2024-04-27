import { createSlice } from "@reduxjs/toolkit";

import { AppState } from "app/services/store";

interface DatabaseState {
  dataSources: {
    data: unknown;
    loading: unknown;
    error: unknown;
  };

  columns: {
    data: unknown;
    loading: unknown;
    error: unknown;
  };

  whenOptions: {
    data: unknown;
    loading: unknown;
    error: unknown;
  };

  whenValues: {
    data: unknown;
    loading: unknown;
    error: unknown;
  };
  sendData: {
    data: unknown;
    loading: unknown;
    error: unknown;
  };
}

const initialState: DatabaseState = {
  dataSources: {
    data: [],
    loading: false,
    error: null,
  },

  columns: {
    data: [],
    loading: false,
    error: null,
  },

  whenOptions: {
    data: [],
    loading: false,
    error: null,
  },

  whenValues: {
    data: [],
    loading: false,
    error: null,
  },

  sendData: {
    data: {},
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: "database/app",
  initialState,
  reducers: {
    getDataSourcesRequest: (state) => ({
      ...state,
      dataSources: {
        ...state.dataSources,
        loading: true,
        error: null,
      },
    }),
    getDataSourcesSuccess: (state, action) => ({
      ...state,
      dataSources: {
        ...state.dataSources,
        error: null,
        loading: false,
        data: action.payload,
      },
    }),
    getDataSourcesError: (state, action) => ({
      ...state,
      dataSources: {
        ...state.dataSources,
        loading: false,
        error: action.payload,
      },
    }),

    getColumnsRequest: (state) => ({
      ...state,
      columns: {
        ...state.columns,
        loading: true,
        error: null,
      },
    }),
    getColumnsSuccess: (state, action) => ({
      ...state,
      columns: {
        ...state.columns,
        error: null,
        loading: false,
        data: action.payload,
      },
    }),
    getColumnsError: (state, action) => ({
      ...state,
      columns: {
        ...state.columns,
        loading: false,
        error: action.payload,
      },
    }),

    getWhenOptionsRequest: (state) => ({
      ...state,
      whenOptions: {
        ...state.whenOptions,
        loading: true,
        error: null,
      },
    }),
    getWhenOptionsSuccess: (state, action) => ({
      ...state,
      whenOptions: {
        ...state.whenOptions,
        error: null,
        loading: false,
        data: action.payload,
      },
    }),
    getWhenOptionsError: (state, action) => ({
      ...state,
      whenOptions: {
        ...state.whenOptions,
        loading: false,
        error: action.payload,
      },
    }),

    getWhenValuesRequest: (state) => ({
      ...state,
      whenValues: {
        ...state.whenValues,
        loading: true,
        error: null,
      },
    }),
    getWhenValuesSuccess: (state, action) => ({
      ...state,
      whenValues: {
        ...state.whenValues,
        error: null,
        loading: false,
        data: action.payload,
      },
    }),
    getWhenValuesError: (state, action) => ({
      ...state,
      whenValues: {
        ...state.whenValues,
        loading: false,
        error: action.payload,
      },
    }),

    sendDataRequest: (state) => ({
      ...state,
      sendData: {
        ...state.sendData,
        loading: true,
        error: null,
      },
    }),
    sendDataSuccess: (state, action) => ({
      ...state,
      sendData: {
        ...state.sendData,
        error: null,
        loading: false,
        data: action.payload,
      },
    }),
    sendDataError: (state, action) => ({
      ...state,
      sendData: {
        ...state.sendData,
        loading: false,
        error: action.payload,
      },
    }),
  },
});

export const { actions: databaseAppActions } = slice;

export const databaseAppSelector = (state: AppState) =>
  state.database.appService;

export default slice.reducer;
