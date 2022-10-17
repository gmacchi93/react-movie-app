import { ERROR, LOADING, SUCCESS } from "../constants/Status";

const getStatus = (state: any, action: string,) => {
  const status = state.status[`${action}`];
  const isSuccess = status === SUCCESS;
  const isError = status === ERROR;
  const isLoading = status === LOADING;
  return {
    status,
    isLoading,
    isSuccess,
    isError,
  };
};

export default getStatus;
