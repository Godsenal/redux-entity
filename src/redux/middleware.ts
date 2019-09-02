import thunk, { ThunkAction } from "redux-thunk";
import { Middleware, MiddlewareAPI, AnyAction } from "redux";
import { Store } from "./reducer";
import { DataAction } from "./action";

type ThunkResult<R> = ThunkAction<R, Store, undefined, DataAction>;

export const thunkMiddleware = thunk;

// Async Entity를 전부 관리하는 미들웨어
export const asyncMiddleware: Middleware = (
  api: MiddlewareAPI
) => next => async <R>(action: AnyAction | ThunkResult<R>) => {
  if (typeof action === "function") {
    return action(api.dispatch, api.getState, undefined);
  }
  if (!action.entity) {
    return next(action);
  }
  const entity: Entity = action.entity;
  api.dispatch(entity.ACTION.request(...action.payload));
  try {
    const data = await entity.API(...action.payload);
    api.dispatch(entity.ACTION.success(data));
  } catch (err) {
    api.dispatch(entity.ACTION.failure("에러 발생"));
  }
};
