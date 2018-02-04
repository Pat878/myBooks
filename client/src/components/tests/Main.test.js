import React from "react";

import { mount } from "enzyme";
import Main from "../Main";

describe("Main", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Main createBookPath={jest.fn()} />);
  });

  describe("button test", () => {
    it("should call createBookPath function", () => {
      const button = wrapper.find("button");
      button.simulate("click");
      expect(wrapper.props().createBookPath).toHaveBeenCalled();
    });
  });
});
