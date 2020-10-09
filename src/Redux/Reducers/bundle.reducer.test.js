import reducer from "./bundle.reducer";
import { ADD_BUNDLE, DELETE_BUNDLE } from "../Actions/bundle.action";
const initialState = [];

describe("Reducer about bundle", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it("should type add bundle", () => {
    expect(
      reducer(initialState, {
        type: ADD_BUNDLE,
        payload: {
          name: "Bundle 2",
          total: 260,
          items: [],
        },
      })
    ).toEqual([
      ...initialState,
      {
        name: "Bundle 2",
        total: 260,
        items: [],
      },
    ]);
  });

  it("should type delete bundle", () => {
    expect(
      reducer(initialState, {
        type: DELETE_BUNDLE,
        payload: 0,
      })
    ).toEqual(...initialState, []);
  });
});
