import { Data } from "model/data";
import { DataAction, DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE } from "./action";

export interface Store {
  status: Status;
  items: Data[];
  error: string;
}

const initialState: Store = {
  status: "INIT",
  items: [],
  error: ""
};

export default function reducer(
  state: Store = initialState,
  action: DataAction
): Store {
  switch (action.type) {
    case DATA_REQUEST: {
      return { ...state, status: "FETCHING" };
    }
    case DATA_SUCCESS: {
      return { ...state, items: action.payload, status: "SUCCESS", error: "" };
    }
    case DATA_FAILURE: {
      return { ...state, items: [], error: action.payload, status: "FAILURE" };
    }
    default:
      return state;
  }
}
