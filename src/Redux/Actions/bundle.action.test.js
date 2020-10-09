import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { add_bundle_action, delete_bundle_action } from "./bundle.action";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe("bundles action", () => {
  afterEach(() => {
    store.clearActions();
  });
  it("should add the bundle", () => {
    const bundle = {
      name: "Bundle 2",
      total: 260,
      items: [],
    };
    store.dispatch(add_bundle_action(bundle));
    expect(store.getActions()).toEqual([
      {
        type: "ADD_BUNDLE",
        payload: bundle,
      },
    ]);
  });
  it("should delete the bundle", () => {
    store.dispatch(delete_bundle_action(0));
    expect(store.getActions()).toEqual([{ type: "DELETE_BUNDLE", payload: 0 }]);
  });
});
