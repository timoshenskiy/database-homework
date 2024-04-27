// import axios from "axios";
import dataSources from "./static/dataSources";
import columns from "./static/columns";
import whenOptions from "./static/whenOptions";
import whenValues from "./static/whenValues";
import { SendDataInterface } from "./interface";

const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

// export const apiGetSomething = () => axios.get(`url`);
export const apiGetDataSources = async () => {
  await wait(100);

  return dataSources;
};

export const apiGetColumns = async () => {
  await wait(100);

  return columns;
};

export const apiGetWhenOptions = async () => {
  await wait(100);

  return whenOptions;
};

export const apiGetWhenValues = async () => {
  await wait(100);

  return whenValues;
};

export const apiSendData = async (data: SendDataInterface) => {
  await wait(100);

  return { code: 200, message: "success", data };
};
