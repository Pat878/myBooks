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

  describe("input tests", () => {
    it("should update prop.fields.title on change", () => {
      const titleInput = wrapper.find("input").first();
      wrapper.props().fields.title = "title";
      titleInput.simulate("change");
      wrapper.mount();
      expect(wrapper.props().updateForm).toHaveBeenCalled();
      expect(titleInput.instance().value).toEqual("title");
    });

    it("should update prop.fields.author on change", () => {
      const authorInput = wrapper.find("input").at(1);
      wrapper.props().fields.author = "author";
      authorInput.simulate("change");
      wrapper.mount();
      expect(wrapper.props().updateForm).toHaveBeenCalled();
      expect(authorInput.instance().value).toEqual("author");
    });

    it("should update prop.fields.summary on change", () => {
      const summaryInput = wrapper.find("textarea");
      wrapper.props().fields.summary = "summary";
      summaryInput.simulate("change");
      wrapper.mount();
      expect(wrapper.props().updateForm).toHaveBeenCalled();
      expect(summaryInput.instance().value).toEqual("summary");
    });
  });

  describe("button tests", () => {
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
});
