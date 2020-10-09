import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import FormCreateItem from "./index";

let wrapper;
const mockBundle = [];
const mockStore = configureStore();
const store = mockStore(mockBundle);
store.dispatch = jest.fn();
 
beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <FormCreateItem />
      </Provider>
    );
});

afterEach(() => {
    cleanup;
});

describe("Component FormCreateItem", () => {
    test("should render FormCreateItem component correctly" , () => {
        const { getByTestId } = wrapper;
        expect(getByTestId("data-test-form-create")).toBeDefined();
    })

    test("should update input of code item on change" , () => {
        const { getByTestId } = wrapper;
        const inputCode = getByTestId("data-test-code-item");
        fireEvent.change(inputCode, {target:{value: 'test code'}});
        expect(inputCode.value).toBe("test code");
    })

    test("should update type of item on change" , () => {
        const { getByTestId } = wrapper;
        const radioButton = getByTestId("data-test-type-multiple");
        fireEvent.click(radioButton, { target: { checked: true }});
        expect(radioButton.checked).toEqual(true);
    })

    test("should validate form" , () => {
        const { getByTestId } = wrapper;
        fireEvent.click(getByTestId("data-test-btnCreateItem"));
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    })

    test("should dispatch an action on button create item click" , () => {

        const { getByTestId } = wrapper;
        
        const inputDescription = getByTestId("data-test-description-item");
        fireEvent.change(inputDescription, {target:{value: 'test description'}});

        const inputCode = getByTestId("data-test-code-item");
        fireEvent.change(inputCode, {target:{value: 'test code'}});
        
        fireEvent.click(getByTestId("data-test-btnCreateItem"));
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    })
});