import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CreateItems from "./index";

const mockBundle = {
    items:[]
}
const mockStore = configureStore();
const store = mockStore(mockBundle);

describe("Component CreateItems", () => {
    test("should render CreateItems component correctly" , () => {
        const { getByTestId } = render(
                                    <Provider store={store}>
                                        <CreateItems/>
                                    </Provider>);
        expect(getByTestId("data-test-content-create-items")).toBeDefined();
    })
});