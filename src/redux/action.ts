import { getData } from "api/data";
import { createEntity, ActionTypes } from "util/redux";

export const FETCH_DATA = "FETCH_DATA" as const;

export const DATA_REQUEST = "DATA_REQUEST" as const;
export const DATA_SUCCESS = "DATA_SUCCESS" as const;
export const DATA_FAILURE = "DATA_FAILURE" as const;

const dataEntity = createEntity(DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE)(
  getData
);

export const fetchData = (...args: Parameters<typeof dataEntity.API>) => ({
  type: FETCH_DATA,
  entity: dataEntity,
  payload: args
});

export type DataAction =
  | ReturnType<typeof fetchData>
  | ActionTypes<typeof dataEntity.ACTION>;
