import { AppThunk } from "app/services/store";

import {
  apiGetColumns,
  apiGetDataSources,
  apiGetWhenOptions,
  apiGetWhenValues,
  apiSendData,
} from "./api";
import { databaseAppActions } from "./index";
import {
  ColumnInterface,
  DataSourceInterface,
  SendDataInterface,
} from "./interface";

export const getDataSources = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(databaseAppActions.getDataSourcesRequest());

    const dataSources: DataSourceInterface[] = await apiGetDataSources();
    const formattedDataSources = dataSources.map(
      (dataSource) => dataSource.table_name
    );

    dispatch(databaseAppActions.getDataSourcesSuccess(formattedDataSources));
  } catch (error) {
    dispatch(databaseAppActions.getDataSourcesError(error));
    console.error(error);
  }
};

export const getColumns = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(databaseAppActions.getColumnsRequest());

    const columns: ColumnInterface[] = await apiGetColumns();
    const formattedColumns = columns.map((column) => column.column_name);

    dispatch(databaseAppActions.getColumnsSuccess(formattedColumns));
  } catch (error) {
    dispatch(databaseAppActions.getColumnsError(error));
    console.error(error);
  }
};

export const getWhenOptions = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(databaseAppActions.getWhenOptionsRequest());

    const whenOptions: string[] = await apiGetWhenOptions();

    dispatch(databaseAppActions.getWhenOptionsSuccess(whenOptions));
  } catch (error) {
    dispatch(databaseAppActions.getWhenOptionsError(error));
    console.error(error);
  }
};

export const getWhenValues = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(databaseAppActions.getWhenValuesRequest());

    const whenValues: string[] = await apiGetWhenValues();

    dispatch(databaseAppActions.getWhenValuesSuccess(whenValues));
  } catch (error) {
    dispatch(databaseAppActions.getWhenValuesError(error));
    console.error(error);
  }
};

export const sendData =
  (data: SendDataInterface): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(databaseAppActions.sendDataRequest());

      const response: {
        code: number;
        message: string;
        data: SendDataInterface;
      } = await apiSendData(data);

      dispatch(databaseAppActions.sendDataSuccess(response.data));
    } catch (error) {
      dispatch(databaseAppActions.sendDataError(error));
      console.error(error);
    }
  };
