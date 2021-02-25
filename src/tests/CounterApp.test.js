import CounterApp from "../CounterApp";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import React from "react";

describe("Tests on <CounterApp />", () => {
    let wrapper = shallow(<CounterApp />);

    // It is supposed to show <CounterApp /> properly and
    // the default values.
    // It needs to match with the snapshot.
    test("Shows <CounterApp /> correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Shows the default value
    test("Shows the default value 100", () => {
        const defaultValue = "100";

        const value = wrapper.find("h2").text();
        expect(value).toBe(defaultValue);
    });

    // Increment the default value in 1
    test("Decrease the value with the -1 Button", () => {
        const decreaseValue = "99";
        const wrapper = shallow(<CounterApp />);
        const btn = wrapper.find("button").at(0);

        //We simulate the button click
        btn.simulate("click");

        const counterTxt = wrapper.find("h2").text().trim();
        expect(counterTxt).toBe(decreaseValue);
    });

    // Decrease the default value in 1
    test("Decrease the value with the +1 Button", () => {
        const increaseValue = "101";
        const wrapper = shallow(<CounterApp />);
        const btn = wrapper.find("button").at(2);

        //We simulate the button click
        btn.simulate("click");

        const counterTxt = wrapper.find("h2").text().trim();
        expect(counterTxt).toBe(increaseValue);
    });

    //Reset the default value 
    test("Reset the value with the devault parameter", () => {
        const defValue = "100";
        const wrapper = shallow(<CounterApp />);
        const btn = wrapper.find("button").at(1);

        btn.simulate("click");

        const counterTxt = wrapper.find("h2").text().trim();
        expect(counterTxt).toBe(defValue);
    });
});