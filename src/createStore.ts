import { applyMiddleware, createStore, compose } from "redux";
import * as middlewares from "./redux/middleware";
import reducer from "./redux/reducer";

const cs = () => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(...Object.values(middlewares)))
  );
};
export default cs;
