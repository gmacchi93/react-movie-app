import { AnyAction } from "redux";

export default function createReducer(
  initialState: any,
  handlers: { [key: string]: Function }
) {
  return (state = initialState, action: AnyAction) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;
}
