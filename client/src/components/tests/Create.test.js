import React from "react";

import { shallow, mount } from "enzyme";
import Create from "../Create";

describe("Create", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Create
        fields={{ author: "", title: "", summary: "" }}
        goBack={jest.fn()}
        updateForm={jest.fn()}
        submitNewBook={jest.fn()}
        fieldErrors={{}}
      />
    );
  });

  it("should update prop.fields.title onChange", () => {
    let input = wrapper.find("input").first();
    input.simulate("change", {
      target: { value: "test" }
    });
    expect(wrapper.props().fields.title).toEqual(input.instance().value);
  });
});
