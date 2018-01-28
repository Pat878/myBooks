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

  it("should update prop.fields.title on change", () => {
    const titleInput = wrapper.find("input").first();
    titleInput.simulate("change", {
      target: { value: "test" }
    });
    expect(wrapper.props().fields.title).toEqual(titleInput.instance().value);
  });

  it("should update prop.fields.author on change", () => {
    const authorInput = wrapper.find("input").at(1);
    authorInput.simulate("change", {
      target: { value: "test" }
    });
    expect(wrapper.props().fields.author).toEqual(authorInput.instance().value);
  });

  it("should update prop.fields.summary on change", () => {
    const summaryInput = wrapper.find("textarea");
    summaryInput.simulate("change", {
      target: { value: "test" }
    });
    expect(wrapper.props().fields.summary).toEqual(
      summaryInput.instance().value
    );
  });

  it("should render errors on submit if no form data was entered", () => {
    const button = wrapper.find("button").first();
    const errors = wrapper.find("span");
    button.simulate(
      "click",
      wrapper.setProps({
        fieldErrors: {
          title: "Title Required",
          author: "Author Required",
          summary: "Summary Required"
        }
      })
    );
    expect(wrapper.props().submitNewBook).toHaveBeenCalled();
    wrapper.mount();
    expect(wrapper.props().fieldErrors.title).toEqual(errors.at(0).text());
    expect(wrapper.props().fieldErrors.author).toEqual(errors.at(1).text());
    expect(wrapper.props().fieldErrors.summary).toEqual(errors.at(2).text());
  });

  it("goBack function should be called on button click", () => {
    const button = wrapper.find("button").at(1);
    button.simulate("click");
    expect(wrapper.props().goBack).toHaveBeenCalled();
  });

  it("submitNewBook function should be called with props on button click", () => {
    const button = wrapper.find("button").first();
    button.simulate(
      "click",
      wrapper.setProps({
        fields: {
          title: "example title",
          author: "example author",
          summary: "example summary"
        }
      })
    );
    expect(wrapper.props().submitNewBook).toHaveBeenCalled();
    expect(wrapper.props().fields).toEqual({
      title: "example title",
      author: "example author",
      summary: "example summary"
    });
    expect(wrapper.props().fieldErrors).toEqual({});
  });
});
