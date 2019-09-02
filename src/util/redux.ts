export const createEntity = <R, S, F>(request: R, success: S, failure: F) => {
  return <Params extends any[], Response>(api: EndPoint<Params, Response>) => ({
    ACTION: {
      request: (...args: Params) => ({ type: request, payload: args }),
      success: (data: Response) => ({ type: success, payload: data }),
      failure: (error: string) => ({ type: failure, payload: error })
    },
    API: api
  });
};

export type ActionTypes<T extends { [K in keyof T]: T[K] }> = ReturnType<
  T[keyof T]
>;
