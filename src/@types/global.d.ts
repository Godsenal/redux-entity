type Status = "INIT" | "FETCHING" | "SUCCESS" | "FAILURE";

type EndPoint<Params extends any[], Response> = (
  ...args: Params
) => Promise<Response>;

type Entity = {
  ACTION: {
    request: Function;
    success: Function;
    failure: Function;
  };
  API: EndPoint<any, any>;
};
